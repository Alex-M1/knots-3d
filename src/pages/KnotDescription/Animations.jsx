import React, { useEffect, useState } from 'react'
import { useSprite } from 'react-sprite-animator'
import Range from './Range'
import style from '../../css/Animation.module.css'
import AnimateButtons from './AnimateButtons';




export default function Animations(props) {
    const knot = props.knot,
        [fps, setFps] = useState(50),
        [frame, setFrame] = useState('2d'),
        [isStarted, setStart] = useState(true),
        [rotate, setRotate] = useState(0),
        [scale, setScale] = useState(1),
        link = `./img/images/${knot[`knotenbild${frame}`]}`,
        spriteWidth = +knot.knoren_frameweite,
        spriteHeight = +knot.knoten_framehoehe,
        frameCount = +knot[`knoten_frame_${frame}`],
        spriteColumns = +knot[`knoten_count_x_${frame}`],
        spriteRows = +knot[`knoten_count_y_${frame}`],
        [refresh, setRefresh] = useState(false)



    const toggleStart = () => {
        isStarted ? setStart(false) : setStart(true)
    }

    const toggleFrame = () => {
        frame === '2d' ? setFrame('360') : setFrame('2d')
    }

    const changeFps = (newFps) => {
        if (isStarted) {
            setStart(false)
            setFps(+newFps)
            setStart(true)
        }
        setFps(+newFps)
    }

    let scaleSprite = 1
    if (window.screen.width < 768) scaleSprite = 2
    else scaleSprite = 1

    const styles = useSprite({
        width: spriteWidth,
        height: spriteHeight,
        sprite: link,
        direction: 'horizontal',
        shouldAnimate: isStarted,
        startFrame: 0,
        fps: Math.ceil(25 / 100 * +fps),
        frameCount: frameCount,
        wrapAfter: spriteColumns,
        scale: scaleSprite,
    })


    const setLikedKnot = () => {
        if (localStorage.getItem(`knot3d_number_${knot.knotennummer}`) !== null) {
            localStorage.removeItem(`knot3d_number_${knot.knotennummer}`)
            props.setFavorKnots(localStorage.length)
            return
        }
        localStorage.setItem(`knot3d_number_${knot.knotennummer}`, JSON.stringify(knot))
        props.setFavorKnots(localStorage.length)
        return
    }

    const rotationKnot = () => {
        if (rotate === 0) setRotate(180)
        else if (scale === -1) setRotate(rotate - 180)
        else setRotate(rotate + 180)
    }

    const scaleKnot = () => {
        if (scale === 1) setScale(-1)
        else setScale(1)
    }

    const prevSprite = e => {
        let bgSizeX = +e.target.style.backgroundSize.split('px')[0],
            posY = +e.target.style.backgroundPositionY.split('p')[0],
            posX = +e.target.style.backgroundPositionX.split('p')[0],
            width = +e.target.style.width.split('p')[0],
            heigth = +e.target.style.height.split('p')[0]

        if (posX >= 0) {
            posX = -bgSizeX
            e.target.style.backgroundPositionY = `${posY + heigth}px`
        }
        e.target.style.backgroundPositionX = `${posX + width}px`
    }

    const nextSprite = e => {
        let bgSizeX = +e.target.style.backgroundSize.split('px')[0],
            posY = +e.target.style.backgroundPositionY.split('p')[0],
            posX = +e.target.style.backgroundPositionX.split('p')[0],
            width = +e.target.style.width.split('p')[0],
            heigth = +e.target.style.height.split('p')[0]
        if (posX - spriteWidth <= -bgSizeX) {
            e.target.style.backgroundPositionY = `${posY - heigth}px`
            posX = 0
        }
        e.target.style.backgroundPositionX = `${posX - width}px`
    }

    let x = 0
    const spriteRewind = (e) => {
        if (props.isClicking) {
            let c_x = e.clientX;
            if (x + 10 < c_x) {
                nextSprite(e)
                x = c_x;
            }
            else if (x - 10 > c_x) {

                prevSprite(e)
                x = c_x;
            }

        }
    }
    const move = e => {
        if (props.isClicking) {
            let c_x = e.nativeEvent.changedTouches[0].clientX
            if (x + 10 < c_x) {
                nextSprite(e)
                x = c_x;
            }
            else if (x - 10 > c_x) {
                prevSprite(e)
                x = c_x;
            }
        }
    }


    let a = <div
        className={style.animatedKnot}
        style={styles}
        onMouseMove={spriteRewind}
        onTouchMove={move}
    ></div>
    let bgX = (spriteWidth * spriteColumns - (spriteWidth * 2)) * -1
    let bgY = (spriteHeight * spriteRows - spriteHeight) * -1
    if (window.screen.width < 768) {
        bgX = (spriteWidth * spriteColumns - (spriteWidth * 2)) * -1 / 2
        bgY = (spriteHeight * spriteRows - spriteHeight) * -1 / 2
    }
    let bgSize = `${bgX}px ${bgY}px`

    let toggleRefresh = () => {
        setRefresh(false)
        setStart(true)
    }
    let starting = () => {
        setStart(false)
        setRefresh(true)
    }

    useEffect(() => {
        if (bgSize === a.props.style.backgroundPosition) {
            setTimeout(starting, 40)
        }
    })


    return (
        <div className={style.animation} >

            <div className={style.knotFrame} style={{
                transitionDuration: '1.5s',
                transform: `scaleX(${scale}) rotate(${rotate}deg)`,
            }}>
                <div
                    className={style.animatedKnot}
                    style={styles}
                    onMouseMove={spriteRewind}
                    onTouchMove={move}

                ></div>

            </div>
            <div className={style.animationButtons}>
                <AnimateButtons
                    toggleStart={toggleStart}
                    isStarted={isStarted}
                    toggleFrame={toggleFrame}
                    frame={frame}
                    setLikedKnot={setLikedKnot}
                    knot={knot}
                    rotationKnot={rotationKnot}
                    scaleKnot={scaleKnot}
                    rotate={rotate}
                    toggleRefresh={toggleRefresh}
                    refresh={refresh}
                />
            </div>
            <Range changeFps={changeFps} fps={fps} />
        </div >
    )
}


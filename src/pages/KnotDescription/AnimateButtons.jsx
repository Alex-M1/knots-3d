import React, { useState } from 'react';
import { IconButton } from '@material-ui/core';
import StartButton from './StartButton';


export default function AnimateButtons(props) {
    let [rotate, setRotate] = useState(true),
        [rotateButtonPath, setRotatePath] = useState('img/icons/rotate1line.png'),
        [mirrow, setMirrow] = useState(true),
        [path3d, setPath3d] = useState('img/icons/360line.png'),
        [path2d, setPath2d] = useState('img/icons/2dline.png')

    const rotateTouchStart = () => setRotatePath(rotate ? 'img/icons/rotate1fill.png' : 'img/icons/rotate2fill.png')
    const rotateTouchEnd = () => setRotatePath(rotate ? 'img/icons/rotate2line.png' : 'img/icons/rotate1line.png')
    const measurementTouchStart = () => {
        setPath3d('img/icons/360fill.png')
        setPath2d('img/icons/2dfill.png')
    }
    const measurementTouchEnd = () => {
        setPath3d('img/icons/360line.png')
        setPath2d('img/icons/2dline.png')
    }
    const rotateClick = () => {
        props.rotationKnot()
        setRotate(rotate ? false : true)
    }
    const mirrowClick = () => {
        setMirrow(mirrow ? false : true)
        props.scaleKnot()
    }


    return (
        <>
            <IconButton
                onClick={mirrowClick}
            >
                {mirrow ? <img src='img/icons/left.png' style={{ width: '30px' }} alt='button-mirrow' /> : <img src='img/icons/right.png' style={{ width: '30px' }} alt='button-mirrow' />}
            </IconButton>

            <IconButton
                onClick={rotateClick}
                onTouchStart={rotateTouchStart}
                onMouseDown={rotateTouchStart}
                onTouchEnd={rotateTouchEnd}
                onMouseUp={rotateTouchEnd}
            >
                {rotate ?
                    <img src={rotateButtonPath} style={{ width: '3rem' }} alt='button-rotate' />
                    : <img src={rotateButtonPath} style={{ width: '3rem' }} alt='button-rotate' />
                }
            </IconButton>
            <StartButton isStarted={props.isStarted} toggleStart={props.toggleStart} toggleRefresh={props.toggleRefresh} refresh={props.refresh} />

            <IconButton
                onClick={props.toggleFrame}
                color='primary'
                onTouchStart={measurementTouchStart}
                onMouseDown={measurementTouchStart}
                onTouchEnd={measurementTouchEnd}
                onMouseUp={measurementTouchEnd}
            >
                {props.frame === '2d' ? <img src={path3d} style={{ width: '2.5rem' }} alt='to360' /> : <img src={path2d} style={{ width: '2.5rem' }} alt='to2d' />}
            </IconButton>

        </>
    )
}


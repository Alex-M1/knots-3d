import { IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import ReplayIcon from '@material-ui/icons/Replay';


export default function StartButton(props) {
    const [startButtonPath, setStartPath] = useState('img/icons/playline.png'),
        [pauseButtonPath, setPausePath] = useState('img/icons/pauseline.png')
    let start
    const startTouchStart = () => {
        setStartPath('img/icons/playfill.png')
        setPausePath('img/icons/pausefill.png')
    }
    const startTouchEnd = () => {
        setStartPath('img/icons/playline.png')
        setPausePath('img/icons/pauseline.png')
    }


    if (props.refresh === true) {
        start =
            <IconButton
                onClick={props.toggleRefresh}
                onTouchStart={startTouchStart}
                onMouseDown={startTouchStart}
                onTouchEnd={startTouchEnd}
                onMouseUp={startTouchEnd}
            >
                <ReplayIcon style={{ fontSize: '3rem', marginBottom: 10 }} />
            </IconButton>
    }
    else {
        start = <IconButton
            onClick={props.toggleStart}
            onTouchStart={startTouchStart}
            onMouseDown={startTouchStart}
            onTouchEnd={startTouchEnd}
            onMouseUp={startTouchEnd}
        >
            {props.isStarted ? <img src={pauseButtonPath} style={{ width: '30px' }} alt='start' />
                : <img src={startButtonPath} style={{ width: '30px' }} alt='start' />}
        </IconButton>
    }
    return (
        <>
            { start}
        </>

    )
}
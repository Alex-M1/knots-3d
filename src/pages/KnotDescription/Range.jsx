
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Slider from '@material-ui/core/Slider';



const screen = window.screen.width
let top,
    right,
    sliderWidth,
    position,
    rotate,
    width

top = 87
right = 5
sliderWidth = 190
position = 'fixed'
rotate = 90
width = 190

const useStyles = makeStyles({

    root: {

        height: width,
        position: position,
        top: top,
        right: right,
        background: '#000'
    },


});


export default function Range(props) {
    const classes = useStyles(),
        [visible, setVisible] = useState(0)
    function valuetext(value) {
        props.changeFps(value)
    }

    const screenWidth = window.screen.width
    let right
    if (screenWidth < 768) right = '40%'
    else right = '15%'
    const start = () => setVisible(0.8)
    const end = () => setVisible(0)
    return (
        <React.Fragment>
            <div className={classes.root}>
                <Slider
                    onChange={valuetext}
                    orientation="vertical"
                    getAriaValueText={valuetext}
                    defaultValue={50}
                    aria-labelledby="vertical-slider"
                    max={100}
                    min={1}
                    onTouchStart={start}
                    onTouchEnd={end}
                />
                <div style={{
                    background: '#85c4ff',
                    position: 'fixed',
                    right: right,
                    top: '20%',
                    padding: 5,
                    borderRadius: 10,
                    opacity: visible
                }}>Speed {props.fps}</div>
            </div>
        </React.Fragment>
    );
}
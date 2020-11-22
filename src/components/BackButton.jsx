import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ReplyIcon from '@material-ui/icons/Reply'
import { IconButton } from '@material-ui/core';
import { getSearchItem } from '../redux/knots';
import { connect } from 'react-redux';


export default function BackButton(props) {

    let [backIcon, setBackIcon] = useState(0)
    const toggleFillStart = () => setBackIcon(1)
    const toggleFillEnd = () => setBackIcon(0)
    const refreshSearch = () => props.getSearchItem(null, '')
    return (
        <IconButton
            onMouseDown={toggleFillStart}
            onTouchStart={toggleFillStart}
            onMouseUp={toggleFillEnd}
            onTouchEnd={toggleFillEnd}
            onClick={refreshSearch}
        >
            <NavLink to={`${props.url}`}>
                <ReplyIcon style={{ fillOpacity: backIcon, stroke: 'white', fontSize: '2.3rem' }} />
            </NavLink>
        </IconButton>

    )
}

import React, { useEffect, useState } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import { IconButton } from '@material-ui/core';

export default function LikeButton(props) {
    const knot = props.knot
    let [like, setLike] = useState(
        localStorage.getItem(`knot3d_number_${props.knot.knotennummer}`) !== null ?
            <FavoriteIcon color='primary' />
            : < FavoriteBorderIcon color='primary' />
    )

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
    useEffect(() => {
        setLike(localStorage.getItem(`knot3d_number_${props.knot.knotennummer}`) !== null ?
            <FavoriteIcon color='primary' style={{ fontSize: '2.3rem' }} />
            : < FavoriteBorderIcon color='primary' style={{ fontSize: '2.3rem' }} />)
    }, [props.favorKnots])

    return (
        <IconButton onClick={setLikedKnot}>
            {like}
        </IconButton>

    )
}
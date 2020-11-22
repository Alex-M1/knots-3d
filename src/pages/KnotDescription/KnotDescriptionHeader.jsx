import React from 'react';
import styles from '../../css/KnotDescription.module.css'
import LikeButton from './LikeButton';
import BackButton from '../../components/BackButton';

export default function KnotDescriptionHeader(props) {
    let path = +window.location.pathname.split('_')[2],
        knot = props.knotDescription[path - 1],
        knotName = knot[`knotenname_${props.lang}`].split('_')[0],
        screenWidth = window.screen.width

    if (screenWidth <= 320 && knotName.length > 14) knotName = `${knotName.slice(0, 13)}...`
    else if (screenWidth <= 375 && knotName.length > 20) knotName = `${knotName.slice(0, 19)}...`
    else if (screenWidth <= 425 && knotName.length > 24) knotName = `${knotName.slice(0, 23)}...`
    else if (screenWidth <= 768 && knotName.length > 36) knotName = `${knotName.slice(0, 35)}...`
    return (
        <section className={styles.header_bg}>
            <div className="container">
                <header className={styles.header}>
                    <BackButton
                        url={`/${props.knotsCode}`}
                        getSearchItem={props.getSearchItem}
                    />
                    <h1>{knotName}</h1>
                    <LikeButton knot={knot} setFavorKnots={props.setFavorKnots} favorKnots={props.favorKnots} />
                </header>
            </div>
        </section>

    )
}
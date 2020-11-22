import React, { useState } from 'react';
import styles from '../../css/KnotDescription.module.css'
import Animations from './Animations';

export default function KnotDescriptionContent(props) {
    const path = +window.location.pathname.split('_')[2],
        knot = props.knotDescription[path - 1],
        staticLocalisation = props.staticLocalisation,
        lang = props.languages,
        categories = props.categories

    let thisCategories = categories.map(el => {
        let splitKnotType = knot.knoten_typ.split('_')
        for (let i = 0; i < splitKnotType.length; i++) {
            if (el.code === splitKnotType[i]) return <li key={splitKnotType[i]} >{el[`name_${lang}`]}</li>
        }
        return true
    })

    const [isClicking, toggleClicking] = useState(false)
    const mouseDown = () => toggleClicking(true)
    const mouseUp = () => toggleClicking(false)
    return (
        <section className={styles.content}>
            <div className="container">
                <div
                    className={styles.knotPageDescription}
                    onMouseDown={mouseDown}
                    onMouseUp={mouseUp}
                    onTouchStart={mouseDown}
                    onTouchEnd={mouseUp}
                >
                    <div className={styles.descriptionText}>
                        <b>{staticLocalisation.description[`name_${lang}`]}: </b>
                        <span className={styles.description}>
                            {knot[`knotenbeschreibung_${lang}`]}
                        </span>
                        <p>{knot.knoten_abok ? `ABOK : ${knot.knoten_abok}` : null}</p>
                        <div>
                            <b>{staticLocalisation.alias[`name_${lang}`]}:</b>
                            <ul>
                                {knot[`knotenname_${lang}`].split('_').map(el => <li key={el}>{el}</li>)}
                            </ul>
                        </div>
                        <p>
                            <b>{staticLocalisation.strength[`name_${lang}`]} :</b> {knot.knotenfestigkeit}
                        </p>
                        <div>
                            <b>{categories[2][`type_${lang}`]}:</b>
                            <ul>
                                {thisCategories}
                            </ul>
                        </div>
                    </div>
                    <div className={styles.animate} >
                        <Animations knot={knot} isClicking={isClicking} />
                    </div>
                </div >
            </div>
        </section>

    )
}
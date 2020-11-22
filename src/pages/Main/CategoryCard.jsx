import { ListItem } from '@material-ui/core';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../../css/KnotCard.module.css'



export default function CategoryCard(props) {
    const chooseCategory = (e) => {
        props.setKnotsByCategories(props.text.code)
    }

    let [quantityCategory, set] = useState(0)

    props.knotDescription.map(el => {
        if (props.text.code === 'all') return quantityCategory = props.knotDescription.length
        else if (props.text.code === 'favorite') return quantityCategory = localStorage.length
        return el.knoten_typ.split('_').forEach(type => {
            if (type === props.text.code) quantityCategory++
        })
    })

    return (
        <NavLink to={`/${props.text.code}`} className={styles.cardNav}>
            <div className={styles.knotCard}>
                <ListItem button onClick={chooseCategory} >
                    <div className={styles.knotBox}>
                        <div className={styles.knotBox_item}>
                            <img src={props.text.image} alt="knots" />
                            <div>{props.text[`name_${props.languages}`]}</div>
                        </div>
                        <div>{quantityCategory}</div>
                    </div>
                </ListItem>
            </div>
        </NavLink >
    )
}


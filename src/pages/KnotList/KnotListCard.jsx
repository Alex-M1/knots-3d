import { ListItem } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../../css/KnotList.module.css'
export default function KnotListCard(props) {

    return (
        <section >
            <NavLink to={`/knot_id_${props.data.knotennummer}`} className={styles.cardNav}>
                <div className={styles.knotCard}>
                    <ListItem button >
                        <div className={styles.knotBox}>
                            <img src={`img/listimage/${props.data.knotenbild2d}`} alt="knots" />
                            <div className={styles.knotBox_item}>
                                <div>{props.data[`knotenname_${props.languages}`].split('_')[0]}</div>
                                <div className={styles.secondName}>{props.data[`knotenname_${props.languages}`].split('_').join(', ')}</div>
                            </div>
                        </div>
                    </ListItem>
                </div>
            </NavLink >
        </section>
    )
}
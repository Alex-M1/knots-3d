import React from 'react';
import Language from './Lang';
import styles from '../../css/Main.module.css'
import Share from './Share';
import { NavLink } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import TranslateIcon from '@material-ui/icons/Translate';

export default function MainHeader(props) {

    return (
        <section className={styles.mainHeader}>
            <div className="container">
                <header className={styles.header}>
                    <Share />
                    <h1>Knots 3D</h1>

                    <IconButton  >
                        <NavLink to='lang'>
                            <TranslateIcon style={{ fontSize: '2rem' }} />
                        </NavLink>
                    </IconButton>

                </header>
            </div>

        </section>
    )
}
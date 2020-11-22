import React from 'react';
import CategoryCard from './CategoryCard'
import styles from '../../css/Main.module.css'

export default function KnotCategory(props) {

    let sidebarCollection = props.categories.map(el => {
        if (el.type_eng === 'Collection') return <CategoryCard text={el}
            key={el.name_ru}
            setKnotsByCategories={props.setKnotsByCategories}
            getSearchItem={props.getSearchItem}
            knotDescription={props.knotDescription}
            languages={props.languages}
        />
        return false
    })

    let sidebarCategory = props.categories.map(el => {
        if (el.type_eng === 'Category') return <CategoryCard text={el}
            key={el.name_ru}
            setKnotsByCategories={props.setKnotsByCategories}
            getSearchItem={props.getSearchItem}
            knotDescription={props.knotDescription}
            languages={props.languages}
        />
        return false
    })

    let sidebarType = props.categories.map(el => {
        if (el.type_eng === 'Type') return <CategoryCard text={el}
            key={el.name_ru}
            setKnotsByCategories={props.setKnotsByCategories}
            getSearchItem={props.getSearchItem}
            knotDescription={props.knotDescription}
            languages={props.languages}
        />
        return false
    })

    return (
        <div className={styles.knotCategory}>
            <div className={styles.category}> <div className='container'>{props.categories[0][`type_${props.languages}`]}</div> </div>
            <div className="container">
                <div className={styles.knotCardCategory}>
                    {sidebarCollection}
                </div>
            </div>

            <div className={styles.category}> <div className='container'>{props.categories[2][`type_${props.languages}`]}</div> </div>
            <div className="container">
                <div className={styles.knotCardCategory}>
                    {sidebarCategory}
                </div>
            </div>

            <div className={styles.category}> <div className='container'>{props.categories[15][`type_${props.languages}`]}</div> </div>
            <div className="container">
                <div className={styles.knotCardCategory}>
                    {sidebarType}
                </div>
            </div>
        </div>
    )
}
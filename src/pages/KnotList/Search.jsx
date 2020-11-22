import React from 'react'
import style from '../../css/Search.module.css'

export default function Search(props) {
    const searchChange = (e) => {
        let filteredList = props.knotDescription.filter(item => {
            return item[`knotenname_${props.lang}`].toLowerCase().search(e.target.value.toLowerCase()) !== -1;
        });
        props.getSearchItem(filteredList, e.target.value)
    }

    return (
        <input
            type="text"
            onChange={searchChange} value={props.searchInput}
            placeholder={props.staticLocalisation.search[`name_${props.lang}`]}
            className={style.search}
        />
    )
}
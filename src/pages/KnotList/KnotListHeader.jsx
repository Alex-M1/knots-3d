import React, { useState } from 'react';
import ReplyIcon from '@material-ui/icons/Reply';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton, } from '@material-ui/core';
import style from '../../css/KnotList.module.css'
import { NavLink } from 'react-router-dom';
import Search from './Search';
import BackButton from '../../components/BackButton';


export default function KnotListHeader(props) {
    let [searchIcon, setSearchIcon] = useState(0),
        [isSearch, setSearch] = useState(false)


    const toogleSearchStart = () => setSearchIcon(2)
    const toogleSearchEnd = () => setSearchIcon(0)
    const goSearch = () => setSearch(isSearch ? false : true)


    let path = window.location.pathname.slice(1),
        currentCaregory = '',
        screenWidth = window.screen.width
    props.categories.forEach(el => {
        if (el.code === path) currentCaregory = el[`name_${props.languages}`]
    })


    if (screenWidth <= 320 && currentCaregory.length > 16) currentCaregory = `${currentCaregory.slice(0, 15)}...`



    return (
        <section className={style.knotList_bg}>
            <div className="container">
                <header className={style.knotList_header}>
                    <BackButton
                        url='/'
                        getSearchItem={props.getSearchItem}
                    />
                    {
                        isSearch ?
                            <Search
                                getSearchItem={props.getSearchItem}
                                knotDescription={props.knotDescription}
                                lang={props.languages}
                                searchInput={props.searchInput}
                                staticLocalisation={props.staticLocalisation}

                            />
                            : <h1>{currentCaregory}</h1>
                    }
                    <IconButton
                        onMouseDown={toogleSearchStart}
                        onTouchStart={toogleSearchStart}
                        onMouseUp={toogleSearchEnd}
                        onTouchEnd={toogleSearchEnd}
                        onClick={goSearch}
                    >

                        <SearchIcon style={{ stroke: 'white', strokeWidth: searchIcon, fontSize: '2.3rem' }} />
                    </IconButton>
                </header>
            </div>
        </section >

    )
}
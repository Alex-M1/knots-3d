import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setHeaderName, setKnotsByCategories } from '../../redux/knots'
import { setLang } from '../../redux/lang'
import MainHeader from './MainHeader'
import KnotCategory from './KnotCategory'
import Share from './Share'
import { FacebookShareButton } from 'react-share'


function Main(props) {

    return (
        <div>
            <MainHeader
                setLang={props.setLang}
                appLang={props.appLang}
                currentLang={props.languages}
                setHeaderName={props.setHeaderName}
            />


            <KnotCategory
                {...props}
            />
        </div>
    )
}


const mapStateToProps = (state) => ({
    header: state.knots.header,
    categories: state.knots.categories,
    knotDescription: state.knots.knotDescription,
    knotsCode: state.knots.knotsCode,
    languages: state.languages.langCode,
    appLang: state.languages.appLang,
    searchInput: state.knots.searchInput,
    staticLocalisation: state.languages.staticLocalisation,
    favorKnots: state.knots.favorKnots
})

export default connect(mapStateToProps, {
    setLang, setHeaderName, setKnotsByCategories
})(Main)
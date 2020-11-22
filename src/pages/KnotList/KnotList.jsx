import React from 'react';
import { connect } from 'react-redux';
import { getSearchItem, setFavorKnots } from '../../redux/knots';
import KnotListHeader from './KnotListHeader';
import KnotListCard from './KnotListCard'
import styles from '../../css/KnotList.module.css'
function KnotList(props) {
    let path = window.location.pathname.slice(1)
    let knotList

    if (path === 'all') knotList = props.knotDescription.map(el => <KnotListCard data={el} languages={props.languages} key={el.knotennummer} />)

    else if (path === 'favorite') {
        knotList = props.knotDescription.map(el => {
            for (let i = 0; i < props.knotDescription.length; i++) {
                if (JSON.stringify(el) === localStorage.getItem(`knot3d_number_${i}`)) {
                    return <KnotListCard
                        key={el.knotenname_eng}
                        data={el}
                        languages={props.languages}
                        knotNumber={props.getKnotsNumber}
                        getSearchItem={props.getSearchItem}
                        setHeaderName={props.setHeaderName}
                    />
                }
            }
            return false
        })
    }

    else {
        knotList = props.knotDescription.map(el => {
            return el.knoten_typ.split('_').map(card => {
                if (card === path) return <KnotListCard data={el} languages={props.languages} key={el.knotennummer} />
            })
        })
    }
    if (props.search !== null) {
        knotList = props.search.map(el => {
            return <KnotListCard
                data={el} languages={props.languages} key={el.knotennummer}
            />
        })
    }
    return (
        <div >
            <KnotListHeader {...props} />
            <div className="container">
                <div className={styles.knotCard_block}>
                    {knotList}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    categories: state.knots.categories,
    knotsCode: state.knots.knotsCode,
    knotNumber: state.knots.knotNumber,
    knotDescription: state.knots.knotDescription,
    staticLocalisation: state.languages.staticLocalisation,
    languages: state.languages.langCode,
    searchInput: state.knots.searchInput,
    search: state.knots.search
})

export default connect(mapStateToProps, {
    setFavorKnots, getSearchItem
})(KnotList)
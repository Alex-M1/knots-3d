import React from 'react';
import { connect } from 'react-redux';
import { getSearchItem, setFavorKnots } from '../../redux/knots';
import KnotDescriptionContent from './KnotDescriptionContent';
import KnotDescriptionHeader from './KnotDescriptionHeader';


function KnotDescription(props) {

    return (
        <div style={{ background: 'black', height: window.screen.height }}>
            <KnotDescriptionHeader
                lang={props.languages}
                knotDescription={props.knotDescription}
                setFavorKnots={props.setFavorKnots}
                favorKnots={props.favorKnots}
                knotsCode={props.knotsCode}
                getSearchItem={props.getSearchItem}
            />
            <KnotDescriptionContent
                {...props}
            />

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
    favorKnots: state.knots.favorKnots
})

export default connect(mapStateToProps, { setFavorKnots, getSearchItem })(KnotDescription)
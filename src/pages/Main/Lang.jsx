import React from 'react';
import { connect } from 'react-redux';
import { setLang } from '../../redux/lang'
import { NavLink } from 'react-router-dom';
import BackButton from '../../components/BackButton';
import { getSearchItem } from '../../redux/knots';
function Language(props) {
    const changeLang = (e) => {
        props.setLang(e.target.value)
    }
    let background = 'inherit'
    return (
        <>
            <header style={{ display: 'grid', gridTemplateColumns: '1fr 11fr', alignItems: 'center', position: 'fixed', top: 0, background: '#161616', width: '100%' }}>
                <BackButton url='/' getSearchItem={props.getSearchItem} />
                <h1 style={{ justifySelf: 'center' }}>{props.staticLocalisation.selectLang[`name_${props.currentLang}`]}</h1>
            </header>
            <div style={{
                background: '#363636', height: '100%', textAlign
                    : 'left', marginTop: '4rem', overflow: 'hidden'
            }}>
                <div className="container" >
                    {props.appLang.map(el => {
                        if (props.currentLang === el.code) {
                            background = '#83c2fc'
                        }
                        else background = 'inherit'
                        return <NavLink to='/' style={{ textDecoration: 'none' }} key={el.code}>
                            <option
                                style={{
                                    color: '#fff',
                                    borderBottom: '1px solid gray',
                                    cursor: 'pointer',
                                    padding: '2.1rem',
                                    fontSize: 25,
                                    background: background
                                }}
                                onClick={changeLang}

                                value={el.code}
                            >{el.name}</option>
                        </NavLink>
                    }
                    )}
                </div>
            </div>
        </>
    );
}

const mapStateToProps = (state) => ({
    appLang: state.languages.appLang,
    currentLang: state.languages.langCode,
    staticLocalisation: state.languages.staticLocalisation
})

export default connect(mapStateToProps, { setLang, getSearchItem })(Language)
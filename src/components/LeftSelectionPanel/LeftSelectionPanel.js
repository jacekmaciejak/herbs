import React, { useState, useEffect } from 'react'
import './LeftSelectionPanel.scss'
import { NavLink } from 'react-router-dom';
import Button from '../Button/Button';



class LeftSelectionPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
            selectionPanelActive: true
        })
        this.handleSelectionButton = this.handleSelectionButton.bind(this)
    }

    handleSelectionButton() {
        this.setState({
            selectionPanelActive: !this.state.selectionPanelActive
        })
    }

    render() {

        return (
            <nav className='leftSelectionPanel'>
                <Button onClick={this.handleSelectionButton} buttonStyle='btn--primary' buttonSize='btn--large'>
                    {this.state.selectionPanelActive ? 'Pokaż kategorie' : "Zamknij kategorie"}</Button>

                <div className={!this.state.selectionPanelActive ? 'leftSelectionPanel__container' : 'leftSelectionPanel__container-displayNone'} >
                    {/* <NavLink to='/' className='leftSelectionPanel__container__logo' onClick={closeMobileMenu}>
                    Zioła
            <i className="fab fa-pagelines"></i>
                </NavLink> */}

                    <ul className='leftSelectionPanel__menu'>
                        <li className='leftSelectionPanel__item'>
                            <NavLink to='/o-nas' className='leftSelectionPanel__links'
                                activeClassName='link__active'>
                                <i className="fab fa-pagelines"></i>Zioła o Działaniu przeciwalergicznym
              </NavLink>
                        </li>
                        <li className='leftSelectionPanel__item'>
                            <NavLink
                                to='/uslugi'
                                className='leftSelectionPanel__links'
                                activeClassName='link__active'
                            >
                                <i className="fab fa-pagelines"></i>  Usługi
              </NavLink>
                        </li>
                        <li className='leftSelectionPanel__item'>
                            <NavLink
                                to='/nasze-realizacje'
                                className='leftSelectionPanel__links'
                                activeClassName='link__active'
                            >
                                <i className="fab fa-pagelines"></i> Nasz realizacje
              </NavLink>
                        </li>
                        <li className='leftSelectionPanel__item'>                            <NavLink
                            to='/kontakt'
                            className='leftSelectionPanel__links'
                            activeClassName='link__active'
                        >
                            <i className="fab fa-pagelines"></i> Kontakt
              </NavLink></li>
                    </ul>
                </div>
                <Button onClick={this.handleSelectionButton} buttonStyle='btn--primary' buttonSize='btn--large'>
                    {this.state.selectionPanelActive ? 'Filtruj kategorie' : "Zamknij kategorie"}</Button>
            </nav>
        )
    }
}

export default LeftSelectionPanel

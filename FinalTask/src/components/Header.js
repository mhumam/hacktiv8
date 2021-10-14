import React from 'react'
import SearchForm from './Search'

const Header = ({ onSearch }) => {
    return (
        <header className="app-bar">
            <div className="app-bar__menu">
                <button id="hamburgerButton">☰</button>
            </div>
            <div className="app-bar__brand">
                <h1>Movie Catalogue</h1>
            </div>
            <nav id="navigationDrawer" className="app-bar__navigation">
                <SearchForm onSearch={onSearch} />
            </nav>
        </header>
    )
}

export default Header

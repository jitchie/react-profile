import React from 'react'
import { Link } from 'react-router-dom';
import { AboutMe, Contact, Portfolio, Resume } from "../Pages";


import './Header.css';

const HeaderLink = ({ page }) => {
    const title = page.charAt(0).toUpperCase() + page.slice(1);
    

    return <Link to={`/${page}`}>{title}</Link>;
};

function Header() {
    

    return (
    <div className='header'>
    <HeaderLink page='about' component={AboutMe} />
    <HeaderLink page='contact' component={Contact} />
    <HeaderLink page='portfolio' component={Portfolio} />
    <HeaderLink page='resume' component={Resume} />
    </div>
    )
}

export default Header


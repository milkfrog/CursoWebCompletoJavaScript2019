import './Nav.css'
import NavItem from './NavItem'
import React from 'react'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavItem href="/" itemIcon="fa fa-home" itemTitle="Início"/>
            <NavItem href="/users" itemIcon="fa fa-users" itemTitle="Usuários"/>
        </nav>
    </aside>
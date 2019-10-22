import './Nav.css'
import React from 'react'
import NavItem from './NavItem'

export default props =>
    <aside className='menu-area'>
        <nav className="menu">
            <NavItem path='/' icon='home' name='Início' />
            <NavItem path='/productType' icon='product-hunt' name='Tipo de produto' />
            <NavItem path='/fileReader' icon='product-hunt' name='Importar arquivo CSV' />
        </nav>
    </aside>
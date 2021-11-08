import React from 'react'
import './layout.css'
const Layout = ({children}) => {
    return (
        <section className="layout__container">
            {children}
        </section>
    )
}
export default Layout
import Footer from 'components/Footer'

import React from 'react'

const Layout2 = ({children}) => {
    return (
        <div className="Contenedor-del-layout">
            
            <main>{children}</main>
            <Footer/>
        </div>
    )
}

export default Layout2;
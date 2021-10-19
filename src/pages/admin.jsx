
import Footer from 'components/Footer';
import Header from 'components/Header';
import React from 'react'
import imagen1 from 'img/dos.gif';

const admin = () => {
    return (
        <body>
      <Header/>
      <section class="contenedor sobre-nosotros">
            <h2 class="titulo">Nuestro producto</h2>
            <div class="contenedor-sobre-nosotros">
                <img src={imagen1} alt="no funciono" class="imagen-obout-us"/>
                <div class="Contenido-textos">
                    <h3><span>1</span> Los mejores productos</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima perspiciatis eveniet quis
                        sapiente nostrum nam magni laudantium error voluptatum veritatis vero, porro ipsam architecto
                        vitae quas necessitatibus placeat cum dolorem!</p>
                    <h3><span>2</span> Otros productos</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima perspiciatis eveniet quis
                        sapiente nostrum nam magni laudantium error voluptatum veritatis vero, porro ipsam architecto
                        vitae quas necessitatibus placeat cum dolorem!</p>

                </div>
            </div>
        </section>
       
    
        <br/>
        <br/>
    <Footer/>
    </body>  
    );
}

export default admin;

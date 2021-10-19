import Footer from 'components/Footer';
import Header from 'components/Header';
import 'Login/styleRegister.css';

function Registro(){
    return (
    <body>
      <Header/>
      
    <form action="Index.html">
  <section class="form-register">
    <h4>Regístrate</h4>
    <input class="controls" type="text" name="nombres" id="nombres" placeholder="Nombres" required="required"/>
    <input class="controls" type="text" name="apellidos" id="apellidos" placeholder="Apellidos" required="required"/>
    <input class="controls" type="email" name="correo" id="correo" placeholder="Correo electrónico" required="required"/>
    <input class="controls" type="password" name="correo" id="correo" placeholder="Contraseña" required="required"/> 
  
    <div class="d-grid">
      <button type="submit" class="btn btn-outline-info">Registrarse</button>
    </div>
    <p><a href="Index.html">Atras</a></p>
  </section>
        </form>
        <br/>
        <br/>
        <Footer/>
        </body>  
      );
}

export default Registro;
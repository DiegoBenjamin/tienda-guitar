
import HeaderSinCarrito from "../components/HeaderSinCarrito"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

export default function Contacto() {
return (

<>
    <NavBar/>
    <HeaderSinCarrito />

    <main className="container-xl mt-5"></main>

<section className="contacto">
      <h2>Contacto</h2>
      <p>¿Tienes alguna pregunta? ¡Contáctanos!</p>

      <form className="formulario-contacto">
        <label>
          Nombre:
          <input type="text" name="nombre" required />
        </label>

        <label>
          Correo electrónico:
          <input type="email" name="email" required />
        </label>

        <label>
          Mensaje:
          <textarea name="mensaje" rows="4" required></textarea>
        </label>

        <button type="submit">Enviar</button>
      </form>
    </section>


    <Footer/>
</>

)

}




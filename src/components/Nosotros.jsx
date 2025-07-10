import NavBar from "../components/NavBar"
import HeaderSinCarrito from "../components/HeaderSinCarrito"
import Footer from "../components/Footer"
import Acustica from '../img/Acustica.jpg'
import Electrica from '../img/Electrica.jpeg'
import Tienda from '../img/Tienda.jpg'


export default function Nosotros() {
return (

<>
<NavBar/>
<HeaderSinCarrito />
 (
    <section className="nosotros">
      <div className="nosotros-texto">
        <h2>Sobre Nosotros</h2>
        <p><strong>GuitarLA</strong> nació en 1998 con una pasión por las cuerdas y la música auténtica. Desde nuestros humildes inicios en un pequeño local de Ciudad de México, nos hemos convertido en una referencia para músicos locales y profesionales.</p>
        <p>Fundada por <strong>Ricardo Salinas</strong>, un luthier apasionado y músico de corazón, la tienda ofrece no solo guitarras, sino también asesoría personalizada, reparación y clases.</p>
        <p>Con más de 25 años de experiencia, seguimos vibrando al ritmo de cada acorde que sale de nuestras guitarras.</p>
      </div>

      <div className="nosotros-imagenes">
        <img src={Acustica} alt="Guitarra acústica" />
        <img src={Tienda} alt="Tienda de guitarras" />
        <img src={Electrica} alt="Guitarra eléctrica" />
      </div>
    </section>


    <Footer />

</>


)

}


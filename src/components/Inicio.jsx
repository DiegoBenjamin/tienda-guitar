import { useState } from "react"
import HeaderSinCarrito from "../components/HeaderSinCarrito"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { dbNoticias } from  "../data/dbNoticias" 




export default function Inicio() {

    const [noticias] = useState(dbNoticias) // const [data, setData] = useState(db)
    

return (
<>
<NavBar/>
<HeaderSinCarrito />


   <section className="noticias-section">
      <h2 >Anuncios y Noticias</h2>
      <div className="contenedor-noticias">
        {noticias.map((item, index) => (
          <div className="card-noticia" key={index}>
            <img src={`../img/${item.imagen}.jpg`} alt={item.titulo} />
            <div className="contenido-noticia">
              <h3>{item.titulo}</h3>
              <p className="fecha">{item.fecha}</p>
              <p>{item.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>


    <Footer/>
</>


)

}
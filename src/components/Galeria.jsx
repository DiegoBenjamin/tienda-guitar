import { useState } from "react"
import HeaderSinCarrito from "../components/HeaderSinCarrito"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { db } from  "../data/db" 



export default function Galeria() {

const [imagenes] = useState(db) // const [data, setData] = useState(db)

return (
<>
<NavBar/>
<HeaderSinCarrito />

 <section className="galeria">
      <h2>Galería</h2>
      <div className="galeria-grid">

            {imagenes.map((guitar)=> (
                  <div key={guitar.id} className="galeria-item">
            <img src={`../img/${guitar.image}.jpg`} alt={guitar.name} />
          </div>   
            )  )}


       
      </div>
    </section>
<Footer/>

</>


)

}



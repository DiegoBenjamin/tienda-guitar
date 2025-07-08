
import { useState } from "react"
import Guitar from "./components/Guitar"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { db } from  "./data/db" 

function App() {

const [data] = useState(db) // const [data, setData] = useState(db)
const [cart, setCart] = useState([])

function addToCart(item){
  const  itemExists = cart.findIndex((guitar)=> guitar.id === item.id )
  if (itemExists >= 0) { // existe en el carrito 
      const updateCart = [...cart]
      updateCart[itemExists].quantity++
      setCart(updateCart)
  } else {
      item.quantity = 1
      setCart([...cart, item])
  }
}

function removeFromCar(id){
  setCart(prevCart => prevCart.filter(guitar => guitar.id !== id))
}

function increaseQuantity(id){
  console.log("incrementando",id)
}




  return (
    <>
    <Header
      cart={cart}
      removeFromCar={removeFromCar}
      increaseQuantity={increaseQuantity}
    />
    

    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar)=> (
              <Guitar 
                key={guitar.id}
                guitar={guitar}
                addToCart ={addToCart}
              />
            )
          )}
            
        </div>
    </main>

    <Footer />
 

    </>
  )
}

export default App

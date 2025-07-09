
import { useState, useEffect } from "react"
import Guitar from "./components/Guitar"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { db } from  "./data/db" 

function App() {

  const initialCart = () => {

    const localStorageCart = localStorage.getItem('cart')
    return localStorageCart ? JSON.parse(localStorageCart) : []
  }

const [data] = useState(db) // const [data, setData] = useState(db)
const [cart, setCart] = useState(initialCart)

const MIN_ITEMS = 1
const MAX_ITEMS = 5

useEffect(() => {
  localStorage.setItem('cart',JSON.stringify(cart)) 
},[cart])

function addToCart(item){
  const  itemExists = cart.findIndex((guitar)=> guitar.id === item.id )
  if (itemExists >= 0) { // existe en el carrito 
    if(cart[itemExists].quantity >= MAX_ITEMS) return
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



function decreaseQuantity(id){

  const updateCart = cart.map(item => {
    if(item.id === id && item.quantity > MIN_ITEMS){
      return {
        ...item,
        quantity:item.quantity -1
      }
    }

    return item

  })
  setCart(updateCart)
}


function increaseQuantity(id){
  const updateCart = cart.map(item => {
    if(item.id === id && item.quantity < MAX_ITEMS){
      return {
        ...item,
        quantity:item.quantity +1
      }
      
    }
    return item
  })
  setCart(updateCart)
}


function clearCart(){
  setCart([])
}


  return (
    <>
    <Header
      cart={cart}
      removeFromCar={removeFromCar}
      increaseQuantity={increaseQuantity}
      decreaseQuantity={decreaseQuantity}
      clearCart={clearCart}
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

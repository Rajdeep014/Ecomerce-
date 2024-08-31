import React from 'react'
import { useProduct } from '../Context/ProductContext'
import { Link } from 'react-router-dom'

const Cart = () => {
    const {cart,removeFromCart,checkout} = useProduct()
    if(cart,length===0 ) return <p className="text-center mt-4">Your cart is empty.</p>

   return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      <ul className="space-y-4">
        {cart.map((product) => (
          <li key={product.id} className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-24 h-24 object-cover rounded-md"
            />
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="text-lg font-bold">Price: ${product.price}</p>
            </div>
            <button
              onClick={() => removeFromCart(product.id)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={checkout}
        className="block text-center mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
      >
        Complete Purchase
      </button>
      <Link
        to="/"
        className="block text-center mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Back to Products
      </Link>


</div>
  )
}

export default Cart
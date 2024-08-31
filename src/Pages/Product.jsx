import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useProduct } from '../Context/ProductContext'
const Product = () => {
    const [product, setProduct] = useState([])
    const [filterProduct,setFilterProduct]=useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const {addToCart}=useProduct();



    useEffect(() => {
        const FetchApi=async()=>{

            try {
                const res=await axios.get('https://api.pujakaitem.com/api/products');
                setProduct(res.data);
                setFilterProduct(res.data)
            } catch (err) {
                setError(err.message);  
            }
            finally{
                setLoading(false)
            }
        }
        FetchApi()

    }, [])
     const handleSearch = (query) => {
        if (!query) {
         setFilterProduct(product)
          return;
        }
        const lowercasedQuery = query.toLowerCase();
        const results = products.filter((product) =>
            product.name.toLowerCase().includes(lowercasedQuery)
          );
          setFilterProduct(results);
        };

    if (loading) return <p className="text-center mt-4">Loading...</p>
    if (error) return <p className="text-center mt-4 text-red-500">Error: {error}</p>; 
    if (!filterProduct || filterProduct.length === 0) return <p className="text-center mt-4">No products found</p>;
        


    
  return (
   
     <div className="container mx-auto p-4">
      <SearchBar onSearch={handleSearch} />


    <h1 className="text-2xl font-bold mb-4">Products</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filterProduct.map((product)=>{
           
         <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
           <img
             src={product.image}
             alt={product.name}
             className="w-full h-48 object-cover rounded-md mb-4"
           />
           <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
           <p className="text-gray-600 mb-2">{product.description}</p>
           <p className="text-lg font-bold mb-4">Price: ${product.price}</p>
           <button 
              onClick={() => addToCart(product)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Add to Cart
            </button>
            <Link
              to="/checkout"
              onClick={() => addToCart(product)}
              className="bg-green-500 text-white px-4 py-2 rounded ml-2 hover:bg-green-600 transition"
            >
              Buy Now
            </Link>
          
           </div>

        })}

        </div>
  





        </div>
  )
}

export default Product
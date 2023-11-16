import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { IoSearchOutline } from "react-icons/io5";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">

   <div className="first-content">
   <h1>Store Inventory</h1>
  <div className="search">
    <div className="search-tab">
  <IoSearchOutline /> 
  <input type="text" placeholder='search for title'/>
  </div>
  </div>
  <button className='btn-one'>Add product</button>
  <h3>Total: 20 products</h3>
  </div>

<hr></hr>

  <div className="list-content">
    <div className="title">
      <span className='names'>#</span>
      <span className='names'>Title</span>
      <span className='names'>Category</span>
      <span className='names'>Price</span>
      <span className='names'>Image</span>
      <span className='names'>Check</span>
      <span className='names'>Update</span>
      <span className='names'>Delete</span>   
      </div>
  </div>

  <hr/>
 
  <div className="Add-product">
    <h2>ADD PRODUCT</h2>
    <input type="text" placeholder='Title'/>
    <input type="text" placeholder='Description' />
    <input type="text" placeholder='Category'/>
    <input type="text" placeholder='price'/>
    <input type="text" placeholder='Image URL'/>
    <button className='btn-two'>Add product</button>
    <button className='btn-three'>Go Back to Inventory</button>
  </div>

  <div className="edit-product">
   <h2>EDIT PRODUCT</h2>
   <input type="text" placeholder=''/>
   <input type="text" placeholder=''/>
   <input type="text" placeholder=''/>
   <input type="text" placeholder=''/>
   <input type="text" placeholder=''/>
   <button className='btn-four'>Update Product</button>
  </div>

   </div>
  )
}

export default App

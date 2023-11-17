import { useEffect, useState } from "react";
import "./App.css";
import { IoSearch } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import { PiNotePencil } from "react-icons/pi";
import { RiDeleteBin5Line } from "react-icons/ri";

function App() {
  const [data, setData] = useState([]);

  const getProduct = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setData(res));
  };

  useEffect(() => {
    getProduct();
  }, []);

  console.log(data);

  return (
    <div className="container">
      <div className="first-content">
        <h1>Store Inventory</h1>
        <div className="search">
          <div className="search-tab">
          <button onClick={() => {}}><IoSearch /></button> 
            <input type="text" placeholder="search for title" />
          </div>
        </div>
        <button className="btn-one">Add product</button>
        <h3>Total: 20 products</h3>
      </div>

      <hr></hr>

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
            <th>Image</th>
            <th>Check</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        {/* need to map */}
        <tbody>
          {data.map((item) => {
            const { id, title, price, category, image } = item;
            return (
              <tr>
                <td>{id}</td>
                <td>{title}</td>
                <td>{category}</td>
                <td>{price}</td>
                <td><img className="img" src={image} alt="" /></td>
                <td>
                  <button onClick={() => {}}><FaRegEye /></button>
                </td>
                <td>
                  <button onClick={() => {}}><PiNotePencil /></button>
                </td>
                <td>
                  <button onClick={() => {}}><RiDeleteBin5Line /></button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <hr />
      {/* dialog */}
      <div className="Add-product">
        <h2>ADD PRODUCT</h2>
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Description" />
        <input type="text" placeholder="Category" />
        <input type="text" placeholder="price" />
        <input type="text" placeholder="Image URL" />
        <button className="btn-two">Add product</button>
        <button className="btn-three">Go Back to Inventory</button>
      </div>
    </div>
  );
}

export default App;

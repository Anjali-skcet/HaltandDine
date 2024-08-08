import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Updatemenu.css';
import Adminnavbar from './Adminnavbar';

const UpdateMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [category, setCategory] = useState('');
  const [dishname, setDishName] = useState('');
  const [dishprice, setDishPrice] = useState('');

  useEffect(() => {
    fetchMenuItems();
  }, []); 

  const fetchMenuItems = async () => {
    try {
      const response = await axios.get('http://localhost:8080/forkandfortune/getfullmenu');
      setMenuItems(response.data);
    } catch (error) {
      console.error('Error fetching menu items:', error);
    }
  };

  const handleAddItem = async (e) => {
    e.preventDefault();
    if (category && dishname && dishprice) {
      try {
        const newItem = { category, dishname, dishprice };
        await axios.post('http://localhost:8080/forkandfortune/createmenu', newItem);
        setMenuItems([...menuItems, newItem]);
        setCategory('');
        setDishName('');
        setDishPrice('');
      } catch (error) {
        console.error('Error adding menu item:', error);
      }
    }
  };

  return (
    <div className='image'>
    <Adminnavbar />
    <div className="update-menu">
        <h1>Update Menu</h1>
        <br/><br/>
        <form onSubmit={handleAddItem} className="menu-form">
          <label>
            Category:
            <select value={category} onChange={(e) => setCategory(e.target.value)} required>
              <option value="">Select Category</option>
              <option value="Refreshments or Soups">Refreshments or Soups</option>
              <option value="Starters">Starters</option>
              <option value="Meals">Meals</option>
              <option value="Main Course">Main Course</option>
              <option value="Biriyani & Rice">Biriyani/Rice</option>
              <option value="Dessert">Dessert</option>
              <option value="Beverages">Beverages</option>
            </select>
          </label>
          <label>
            Item Name:
            <input 
              type="text" 
              value={dishname} 
              onChange={(e) => setDishName(e.target.value)} 
              required 
            />
          </label>
          <label>
            Item Price:
            <input 
              type="text"
              inputMode='numeric' 
              value={dishprice} 
              onChange={(e) => setDishPrice(e.target.value)} 
              required 
            />
          </label>
          <br></br>
          <button type="submit">Add Item</button>
        </form>
        <div className="menu-categories">
          <h2>Menu Categories</h2>
          {['Refreshments or Soups', 'Starters', 'Meals', 'Main Course', 'Biriyani & Rice', 'Dessert', 'Beverages'].map((cat) => (
            <Link key={cat} to={`/menu/${cat}`}>
              <button>{cat}</button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpdateMenu;

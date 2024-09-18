import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../styles/Navbar.css";
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9000/api/search-recipes', { 
        ingredients: searchQuery.split(',').map(i => i.trim())
      });
      // Navigate to the results page with search results
      navigate('/results', { state: { recipes: response.data } });
    } catch (error) {
      console.error('Error searching recipes:', error);
    }
  };

  return (
    <>
      <nav>
        <div className="title">
          <h1>QuickBites</h1>
          <img src={logo} alt="logo" className="logo" />
        </div>
        <form className="search-bar" onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="What's in your kitchen?"
            value={searchQuery}
            onChange={handleChange}
          />
          <button type="submit">Search</button>
        </form>
        <Link to="/favourites">Favorites</Link>
      </nav>
    </>
  );
};

export default Navbar;
    
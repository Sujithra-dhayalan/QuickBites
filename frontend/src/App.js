import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Recipe from './pages/Recipe';
import FullRecipe from './pages/FullRecipe';
import Add from './components/Add';
import AddRecipe from './pages/AddRecipe';
import SearchResult from './pages/SearchResults';
import { useState } from 'react';
import Favourites from './pages/Favourites';

const App = () => {
  const [favourites, setFavourites] = useState([]); // Ensure this is initialized

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Recipe favourites={favourites} setFavourites={setFavourites} />} />
        <Route path="/favourites" element={<Favourites favourites={favourites} />} />
        <Route path="/recipe/:id" element={<FullRecipe />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
        <Route path="/results" element={<SearchResult />} />
      </Routes>
      <Add />
    </Router>
  );
};

export default App;

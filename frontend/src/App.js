import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Recipe from './pages/Recipe';
import FullRecipe from './pages/FullRecipe';


const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Recipe />} />
        <Route path="/recipe/:id" element={<FullRecipe/>} />
      </Routes>
    </Router>
    
    </>
  );
};

export default App;

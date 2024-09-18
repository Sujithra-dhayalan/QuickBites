import { useNavigate } from 'react-router-dom';
import "../styles/Add.css"
const Add = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/add-recipe'); // Navigate to the Add Recipe page
  };

  return (
    <div className="plus" onClick={handleClick}>
      +
    </div>
  );
};

export default Add;

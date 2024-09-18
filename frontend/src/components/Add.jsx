import { useNavigate } from 'react-router-dom';
import "../styles/Add.css"
const Add = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/add-recipe'); //redirects to the add post page
  };
  //this is the plus symbol in the right bottom corner of the page
  return (
    <div className="plus" onClick={handleClick}>
      +
    </div>
  );
};

export default Add;

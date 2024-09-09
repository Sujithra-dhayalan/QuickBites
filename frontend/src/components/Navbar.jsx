import  "../styles/Navbar.css"
import logo from '../assets/logo.png'
const Navbar = ()=>{
    return(
        <>
        <nav>
            <div className="title">
                <h1>QuickBites</h1>
                <img src={logo} alt="logo" className="logo"/>

            </div>
            <form className="search-bar">
                <input type="text" placeholder="Search recipes by ingredients"/>
                <button>Search</button>
            </form>
        </nav>
        </>
    )
}

export default Navbar

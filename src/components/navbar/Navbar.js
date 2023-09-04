import { Link } from 'react-router-dom'

//components 
import { Searchbar } from '../index'

// styles
import './Navbar.css';

export default function Navbar() {
  return (
    <div className='navbar'>
      <nav>
        <Link to="/" className="brand"><h1>Elsie's Recipes</h1></Link>
        <Searchbar/>
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  )
}
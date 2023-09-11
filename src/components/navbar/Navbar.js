// imports
import { Link } from "react-router-dom";

// components
import { Searchbar } from "../index";
import { useTheme } from "../../hooks";

// styles
import "./Navbar.css";

export default function Navbar() {
	const { color, changeColor } = useTheme();

	return (
		<div className='navbar' style={{ background: color }}>
			<nav onClick={() => changeColor("pink")}>
				<Link to='/' className='brand'>
					<h1>Elsie's Recipes</h1>
				</Link>
				<Searchbar />
				<Link to='/create'>Create Recipe</Link>
			</nav>
		</div>
	);
}

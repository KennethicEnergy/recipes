// imports
import { Link, useLocation } from "react-router-dom";

// components
import { Searchbar } from "../index";
import { useTheme } from "../../hooks";

// styles
import "./Navbar.css";

export default function Navbar() {
	const { color } = useTheme();
	const { pathname } = useLocation();

	return (
		<div className='navbar' style={{ background: color }}>
			<nav>
				<Link to='/' className='brand'>
					<h1>Elsie's Recipes</h1>
				</Link>
				{pathname === "/" ? <Searchbar /> : null}
				{pathname !== "/create" ? (
					<Link className='add-new' to='/create'>
						Create Recipe
					</Link>
				) : null}
			</nav>
		</div>
	);
}

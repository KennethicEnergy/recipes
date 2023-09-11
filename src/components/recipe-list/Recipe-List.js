import { Link } from "react-router-dom";

// styles
import "./Recipe-List.css";
import { useTheme } from "../../hooks";

export default function RecipeList({ recipes }) {
	const { mode } = useTheme();
	if (recipes.length === 0) {
		return <div className={`error ${mode}`}>No recipes to load...</div>;
	}
	return (
		<div className='recipe-list'>
			{recipes.map((recipe) => (
				<div className={`card ${mode}`} key={recipe.id}>
					<h3>{recipe.title}</h3>
					<p>{recipe.cookingTime} to make.</p>
					<div>{recipe.method.substring(0, 100)}...</div>
					<Link to={`/recipe/${recipe.id}`}>Cook This</Link>
				</div>
			))}
		</div>
	);
}

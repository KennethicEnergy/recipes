// component
import { RecipeList } from '../../components/index';

// hooks
import { useFetch } from '../../hooks/index';

// styles
import './Home.css';


export default function Home() {
  const { data, isPending, error} = useFetch('http://localhost:3000/recipes')


  return (
    <div className='home'>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && data.map(recipe => (
        <h2 key={recipe.id}><RecipeList/></h2>
      ))}
    </div>
  )
}
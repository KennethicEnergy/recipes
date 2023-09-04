import { useRef, useState } from 'react';
// styles
import './Create.css';

export default function Create() {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])
  const ingredientInput = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, method, cookingTime, ingredients)
  }

  const handleAdd = (e) => {
    e.preventDefault();
    const ing = newIngredient.trim()
    if(ing && !ingredients.includes(ing)) {
      setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    } 
    setNewIngredient('')
    ingredientInput.current.focus();
  }

  return (
    <div className="create">
      <h2 className="page-title">Add a New Recipe</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe title:</span>
          <input 
            type="text" 
            onChange={(e) => setTitle(e.target.value)} 
            value={title} 
            placeholder="Sinigang na Aso"
            required/>
        </label>
        <label>
          <span>Method:</span>
          <textarea 
            onChange={(e) => setMethod(e.target.value)}
            placeholder="Hiwain sa leeg ang aso"
            value={method} 
            required/>
        </label>

        <label>
          <span>Ingredients:</span>
          <div className="ingredients">
            <input 
              type="text"
              onChange={(e) => setNewIngredient(e.target.value)}
              ref={ingredientInput}
              placeholder="Sibuyas"
              value={newIngredient}/>
            <button 
              className="btn"
              onClick={handleAdd}>Add</button>
          </div>
        </label>

        {ingredients.length > 0 ? 
          <p>Current ingredients: {
            ingredients.map(ing => <em key={ing}>{ing}</em>)}
          </p>
          :
          <p>No Ingredients</p>
        }

        <label>
          <span>Cooking Time:</span>
          <input 
            type="number" 
            onChange={(e) => setCookingTime(e.target.value)}
            placeholder="45"
            value={cookingTime} 
            required/>
        </label>
        <button className="btn">Submit</button>
      </form>
    </div>
  )
}
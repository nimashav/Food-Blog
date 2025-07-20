import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function RecipeDetails() {
  const recipe = useLoaderData()
  // Ensure ingredients is always an array
  const ingredients = Array.isArray(recipe.ingredients)
    ? recipe.ingredients
    : (typeof recipe.ingredients === 'string'
      ? recipe.ingredients.split(',').map(i => i.trim())
      : [])

  return (
    <>
      <div className='outer-container'>
        <div className='profile'>
          <h5>{recipe.email}</h5>
        </div>
        <h3 className='title'>{recipe.title}</h3>
        <img
          src={recipe.coverImage ? `http://localhost:5000/images/${recipe.coverImage}` : profileImg}
          width="220px"
          height="200px"
          alt="recipe"
        />
        <div className='recipe-details'>
          <div className='ingredients'>
            <h4>Ingredients</h4>
            <ul>
              {ingredients.map((item, idx) => (<li key={idx}>{item}</li>))}
            </ul>
          </div>
          <div className='instructions'>
            <h4>Instructions</h4>
            <span>{recipe.instructions}</span>
          </div>
        </div>
      </div>
    </>
  )
}

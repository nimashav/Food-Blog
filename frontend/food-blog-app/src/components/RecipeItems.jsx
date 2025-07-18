import React from 'react'
import { useLoaderData } from 'react-router-dom'
import foodImg from '../assets/FoodRecipe.png'
import { FaStopwatch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";


const RecipeItems = () => {
  const allRecipes = useLoaderData()
  console.log(allRecipes)
  return (
    <>
      <div className="card-container">
        {
          allRecipes?.map((item, index) => {
            return (
              <div key={index} className='card'>
                <img src={foodImg} width="150px" height="100px" />
                <div className="card-body">
                  <div className="title">
                    {item.title}
                  </div>
                  <div className="icons">
                    <div className="timer">
                      <FaStopwatch />
                    </div>
                    <FaHeart />
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default RecipeItems


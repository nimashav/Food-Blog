import React from 'react'
import FoodRecipe from '../assets/FoodRecipe.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <section className='home'>
        <div className="left">
          <h1>Food Recipe</h1>
          <h3>Welcome to YummiFi, where delicious meets simple! Whether you're a seasoned home cook or just getting started in the kitchen, we bring you easy-to-follow recipes made with love and real ingredients. From cozy comfort foods to global flavors, our collection is designed to inspire your next great meal. Get ready to cook, eat, and fall in love with food all over again.</h3>
          <button>Share your recipe</button>
        </div>
        <div className="right">
          <img src={FoodRecipe} width="800px" height="600px" />
        </div>
      </section>
      <div className="bg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff5500" fillOpacity="1" d="M0,0L60,32C120,64,240,128,360,176C480,224,600,256,720,261.3C840,267,960,245,1080,234.7C1200,224,1320,224,1380,224L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      </div>
      <Footer />
    </>
  )
}

export default Home


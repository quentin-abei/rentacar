import React from 'react'
import homepic from "../assets/sportcar.jpg";
import "./home.css"

const Home = () => {
  return (
    <div>
        <div className='main'>
            <div className='container'>
                <img src={homepic} alt="home" />
                <div className="container_text">
                <p>Rent the best luxury cars <br /> starting from $250</p>
                <button type='button'  > FIND YOUR CAR</button>
                </div>          
            </div>

        </div>
    </div>
  )
}

export default Home
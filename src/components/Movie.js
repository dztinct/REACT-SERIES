import React, { useState } from 'react'
import movieData from './moviesData'
import './style.css'

function Movie() {

    const [movie, setMovie] = useState(movieData)

    const removeAny = (id) => {
        let result = movie.filter((item) => item.id !== id)
                setMovie(result);
            } 
            
            const render = movie.map((item, idx) => {
                return(
                    <div>
                        <img src={item.imageUrl} alt='data' width='200px' height='170px'/>
                        <h4 style={{ textAlign:'center' }}>{item.category}</h4>
                        <div className='btn'>
                            <button onClick={()=>removeAny(item.id)}>X</button>
                        </div>
            </div>
        )
    })
        
    const movieCheck = (category) => {
        let movieLink = movie.filter((movie) => movie.category === category );
        setMovie(movieLink);
    }
    
    const allwood = () => {
        setMovie(movieData);
    }

  return (
    <div>
        <h1>{movie.length} Movies Available</h1>
        <div className='buttons'>
            <button onClick={()=>movieCheck('Hollywood')}>Hollywood</button>
            <button onClick={()=>movieCheck('Bollywood')}>Bollywood</button>
            <button onClick={()=>movieCheck('Nollywood')}>Nollywood</button>
            <button onClick={()=>movieCheck('Chinawood')}>Chinawood</button>
            <button onClick={()=>allwood()}>All Movies</button>
        </div>
        <div className='container'>
            {render}
        </div>
    </div>
  )
}

export default Movie
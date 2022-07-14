import React, { useState } from 'react'
import data from './data'

function Birthday() {
    const [people, setPeople] = useState(data);
    
    const remove = (id) => {
        let peopleFilter = people.filter((item) =>item.id !== id);
        setPeople(peopleFilter);
    }
    
    
    const clearAll = () => {
        setPeople([]);
    }

    const render = people.map((item, idx) => {
        return(
            <div>
                <div>
                    <img src={item.imageUrl} alt=''/>
                    <h4>{item.name}</h4>
                    <h4>{item.age}</h4>
                    <button onClick={()=>remove(item.id)} style={{ marginBottom:'2%' }}>X</button>

                </div>
            </div>
        );
    });
    
    return (
        <div style={{ backgroundColor : 'blueviolet' }}>
            <h1 style={{ color : 'white', textAlign : 'center' }}>{people.length} People Having Birthdays</h1>
            <div>
                <div>
                    {render}
                </div>
            </div>
            <button onClick={clearAll}>Clear</button>
        </div>
  )
    }

export default Birthday
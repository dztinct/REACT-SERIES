import React, { useState, useEffect } from 'react'
import './apiStyle.css'

function MoreApi() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getApi()
    }, [])
    
    const getApi = async () => {
        const apiUrl = await fetch('https://randomuser.me/api/?results=30')
        const response = await apiUrl.json()
        setUsers(response.results)
    }

    const render = users.map((item, idx) => {
        return(
            <div className='container'>
                <img src={item.picture.large}/>
                <p style={{ textTransform:'capitalize' }}>{item.gender}</p>
                <p>My name is {item.name.first} {item.name.last}</p>
                <p>I am {item.dob.age} years old</p>
                <p>I live at No. {item.location.street.number} {item.location.street.name}, {item.location.city}, {item.location.state}, {item.location.country}</p>
                <p>Phone : {item.cell}</p>
            </div>
        )
    })

  return (
    <div>
       <h1> Fetching APIs Using Async Await</h1>
        {render}
    </div>
  )
}

export default MoreApi
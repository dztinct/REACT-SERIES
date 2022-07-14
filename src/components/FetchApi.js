import{ React, useEffect, useState } from 'react'

function FetchApi() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getApi()
    },[])

    const getApi = async () => { 
        const apiUrl = await fetch('https://jsonplaceholder.typicode.com/todos')
        const response = await apiUrl.json()
        setUsers(response);  
    }

    const render = users.map((item, idx) => {
        return(
            <div>
                {item.title}
            </div>
        )
    })
    
    return (
        <div>
        <h1>Fetching APIs</h1>
        <p>{render}</p>
    </div>
  )
}

export default FetchApi
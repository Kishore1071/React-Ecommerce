import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CustomerPost = () => {

    const navigate = useNavigate()

    const [customer_name, setCustomerName] = useState('')
    const [username, setUsername] = useState('')
    const [age, setAge] = useState('')

    const SubmitHandler = event => {

        event.preventDefault()

        const customer_data = {
            username: username,
            customer_name: customer_name,
            age: age
        }

        axios.post('http://127.0.0.1:8000/test/post/', customer_data)
        .then(response => navigate('/'))
        .catch(error => console.log(error))

    }

    return (
        <div>
            <form onSubmit={SubmitHandler}>
                <label htmlFor="">Username</label>
                <input type="text" name='username' value={username} onChange={event => setUsername(event.target.value)}/>
                <br />

                <label htmlFor="">Customer Name</label>
                <input type="text" name='customer_name' value={customer_name} onChange={event => setCustomerName(event.target.value)}/>
                <br />

                <label htmlFor="">Age</label>
                <input type="text" name='age' value={age} onChange={event => setAge(event.target.value)}/>

                <input type="submit" />
            </form>
        </div>
    )
}

export default CustomerPost
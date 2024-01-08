import React from 'react'
import { useNavigate } from 'react-router-dom'

const CustomerRender = ({customer}) => {

  const navigate = useNavigate()
  return (
    <tr>
        <td>{customer.username}</td>
        <td>{customer.customer_name}</td>
        <td>{customer.age}</td>
        <td>
            <button onClick={() => navigate(`/edit/${customer.id}`)}>Edit</button>
        </td>
    </tr>
  )
}

export default CustomerRender
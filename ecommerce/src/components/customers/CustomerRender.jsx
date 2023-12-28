import React from 'react'

const CustomerRender = ({customer}) => {
  return (
    <tr>
        <td>{customer.username}</td>
        <td>{customer.customer_name}</td>
        <td>{customer.age}</td>
        <td>
            <button>Edit</button>
        </td>
    </tr>
  )
}

export default CustomerRender
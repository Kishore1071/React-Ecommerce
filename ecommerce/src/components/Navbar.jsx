import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      <NavLink to='/'>All-Customers</NavLink>
      <NavLink to='/add'>Add-Customer</NavLink>
    </nav>
  )
}

export default Navbar
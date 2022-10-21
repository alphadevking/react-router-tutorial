import { NavLink } from 'react-router-dom'

export const Nav = () => {

  const navLinkStyles = ( { isActive } : any | string ) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      color: isActive ? '#555' : '#aaa',
    }
  }

  return (

    <nav className='primary-nav'>

      <NavLink style={navLinkStyles} to='/' >Home</NavLink>
      <NavLink style={navLinkStyles} to='/about' >About Us</NavLink>
      <NavLink style={navLinkStyles} to='/products' >Products</NavLink>

    </nav>
    
  )
}

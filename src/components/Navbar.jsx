import { NavLink } from 'react-router-dom'


const activeLinkClass = ({ isActive }) => {
  return isActive ? 'rounded-sm bg-slate-300 py-1 px-2 text-gray-700' : 'py-1 px-2 text-slate-700'
}


const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 flex justify-center align-center h-16 col-span-4 bg-neutral-50 border-b bg-opacity-75 backdrop-blur backdrop-filter border-b-slate-300 [&>*]:flex  [&>*]:items-center [&>*]:gap-6 [&>*]:list-none">
      <ul>
        <li>
          <NavLink to="/" className={activeLinkClass}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/user" className={activeLinkClass}>User</NavLink>
        </li>
        <li>
          <NavLink to="/show" className={activeLinkClass}>ShowUserPage</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

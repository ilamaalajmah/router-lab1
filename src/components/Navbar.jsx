import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='bg-gray-800 p-4'>
      <ul className='flex justify-around text-white'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/bootcamps">Bootcamps</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

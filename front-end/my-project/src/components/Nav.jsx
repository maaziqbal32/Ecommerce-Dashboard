import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
  const auth = localStorage.getItem('User');
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate('/signup');
  }

  return (
    <nav className="bg-gray-900 shadow-lg p-2">
      <div className="flex justify-between items-center w-full">
        <div className="text-white text-3xl font-extrabold tracking-wide animate-pulse px-4 py-2">
          <span className="text-teal-400">E-DashBoard</span>
        </div>
      {auth? <ul className='hidden md:flex space-x-10 px-4 py-2'>
          <li className="group relative">
            <Link 
              to='/' 
              className="text-gray-300 hover:text-teal-400 transition duration-300 ease-in-out transform group-hover:scale-110"
            >
              Products
            </Link>
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-teal-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
          <li className="group relative">
            <Link 
              to='/add' 
              className="text-gray-300 hover:text-teal-400 transition duration-300 ease-in-out transform group-hover:scale-110"
            >
              Add Products
            </Link>
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-teal-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
          <li className="group relative">
            <Link 
              to='/update' 
              className="text-gray-300 hover:text-teal-400 transition duration-300 ease-in-out transform group-hover:scale-110"
            >
              Update Product
            </Link>
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-teal-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
          <li className="group relative">
            <Link 
              to='/profile' 
              className="text-gray-300 hover:text-teal-400 transition duration-300 ease-in-out transform group-hover:scale-110"
            >
              Profile
            </Link>
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-teal-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
          <li className="group relative">
              <Link 
                onClick={logout}
                to='/signup' 
                className="text-gray-300 hover:text-teal-400 transition duration-300 ease-in-out transform group-hover:scale-110"
              >
                Logout (Welcome {JSON.parse(auth).name})
              </Link>
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-teal-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </li>
        </ul>
        :
        <ul className='hidde md:flex space-x-10 px-4 py-2'>
        <li className="group relative">
                <Link 
                  to='/signup' 
                  className="text-gray-300 hover:text-teal-400 transition duration-300 ease-in-out transform group-hover:scale-110"
                >
                  Signup
                </Link>
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-teal-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </li>
              <li className="group relative">
                <Link 
                  to='/login' 
                  className="text-gray-300 hover:text-teal-400 transition duration-300 ease-in-out transform group-hover:scale-110"
                >
                  Login
                </Link>
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-teal-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </li>
        </ul>
      }
      </div>
    </nav>
  );
}

export default Nav;

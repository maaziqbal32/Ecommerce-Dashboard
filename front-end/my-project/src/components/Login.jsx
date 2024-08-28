import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom' 

const Login = () => {
  const [password, setPass] = useState("");
  const [email, setEmail] = useState("");
  const navigate=useNavigate();
  useEffect(()=>{
    const auth=localStorage.getItem('User');
    if(auth){
      navigate("/")
    }
  },[])
  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    console.warn('email,password', email, password);

    let result = await fetch('http://localhost:5000/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    result = await result.json();
    console.warn(result);
    if(result.name){
      localStorage.setItem('User',JSON.stringify(result))
      navigate('/');
    }
  };

  return (
    <div className=" flex items-center justify-center w-full">
      <div className=" p-5 mt-2 rounded-lg  max-w-md  w-[450px]">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mt-10">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Enter your Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="font-semibold text-lg mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
            />
          </div>

          <div className="mt-12">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Enter your Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPass(e.target.value)}
              className="font-semibold text-lg mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
            />
          </div>

          <div className="flex items-center justify-center mt-16">
            <button
              type="submit"
              className="w-[150px] h-[50px] justify-center text-lg items-center flex bg-gray-900 text-white p-2 rounded-md hover:bg-gray-800 hover:text-teal-400 transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <span className="relative">Login</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
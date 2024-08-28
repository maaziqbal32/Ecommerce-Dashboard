// import React from 'react';

// function SignUp() {
//   return (
//     <div className="bg-gray-100 flex items-center justify-center w-full ">
//       <div className="bg-white p-5 mt-2 rounded-lg shadow-lg h-[425px] w-[500px]  ">
//         <h2 className="text-2xl font-semibold mb-6 text-gray-800">Sign Up</h2>

//         <form>
//           <div className="mb-4">
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">Enter your Name</label>
//             <input type="text" className="font-semibold text-lg mt-1 p-2 block w-full  border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Enter your Email</label>
//             <input type="email"  className="font-semibold text-lg  mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
//           </div>

//           <div className="mb-6">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">Enter your Password</label>
//             <input type="password"  className="font-semibold text-lg  mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
//           </div>
//           <div className='flex items-center justify-center mt-8 '>
//           <button type="submit" className=" w-[150px] h-[50px] justify-center text-lg items-center flex bg-gray-900 text-white p-2 rounded-md hover:text-teal-400">Sign Up</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default SignUp;f

// import React, { useState } from 'react';

// const SignUp = () => {
//   const [name, setName] = useState("");
//   const [password, setPass] = useState("");
//   const [email, setEmail] = useState("");

//   const collectData = async () => {
//     console.warn(name, password, email);
//     // Api Integrate here where we pass the path ,methods and headers here.
//     let result = fetch('http://localhost:5000/register', {
//       method: 'post',

//       body: JSON.stringify({ name, password, email }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     result = await result.json();
//     console.warn(result);
//   };



//   return (
//     <div className="bg-gray-100 flex items-center justify-center w-full ">
//       <div className="bg-white p-5 mt-2 rounded-lg shadow-lg max-w-md h-[425px] w-[500px]">
//         <h2 className="text-2xl font-semibold mb-6 text-gray-800">Sign Up</h2>

//         <form>
//           <div className="mb-4">
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">Enter your Name</label>
//             <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="font-semibold text-lg mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105" />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Enter your Email</label>
//             <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="font-semibold text-lg mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105" />
//           </div>

//           <div className="mb-6">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">Enter your Password</label>
//             <input type="password" value={password} onChange={(e) => setPass(e.target.value)} className="font-semibold text-lg mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105" />
//           </div>
//           <div className="flex items-center justify-center mt-8">
//             <button type="submit" onClick={collectData} className="w-[150px] h-[50px] justify-center text-lg items-center flex bg-gray-900 text-white p-2 rounded-md hover:bg-gray-800 hover:text-teal-400 transform hover:scale-105 transition duration-300 ease-in-out">
//               <span className="relative">Sign Up</span>

//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default SignUp;



import React, { useState,useEffect } from 'react';
import {useNavigate} from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [password, setPass] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); // useNavigate hook to navigate to other pages.
  useEffect(() => {
    const auth=localStorage.getItem('User');
    if(auth){
      navigate("/"); // Navigate to home page if user is already logged in.
    }
  })

  const collectData = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    console.warn(name, password, email);
    try {
      let result = await fetch('http://localhost:5000/register', {
        method: 'POST',
        body: JSON.stringify({ name, password, email }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      result = await result.json();
      console.warn(result);
      localStorage.setItem('User', JSON.stringify(result)); //use local storage so even if page refresh than their is no effedct on the data .
      if(result)
        {
          navigate("/"); // Navigate to home page after successful registration.
        }
    } catch (error) {
      console.error("Error:", error);
    }
   
  };

  return (
    <div className="flex items-center justify-center w-full  ">
      <div className=" p-5 mt-2 rounded-lg  max-w-md  w-[500px]">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Sign Up</h2>

        <form onSubmit={collectData}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Enter your Name</label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              className="font-semibold text-lg mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105" 
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Enter your Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="font-semibold text-lg mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105" 
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Enter your Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPass(e.target.value)} 
              className="font-semibold text-lg mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105" 
            />
          </div>
          
          <div className="flex items-center justify-center mt-2">
            <button 
              type="submit" 
              className="w-[120px] h-[45px] justify-center text-lg items-center flex bg-gray-900 text-white p-2 rounded-md hover:bg-gray-800 hover:text-teal-400 transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <span className="relative">Sign Up</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;


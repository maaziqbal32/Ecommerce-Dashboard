// // import React, { useState } from 'react';

// // const AddProduct = () => {
// //   const [name, setName] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [email, setEmail] = useState("");

// //   return (
// //     <div className="bg-gray-100 flex items-center justify-center w-full ">
// //       <div className="bg-white p-5 mt-1 rounded-lg shadow-lg max-w-md h-[425px] w-[500px]">
// //         <h2 className="text-2xl font-semibold mb-6 text-gray-800">Add Product</h2>

// //         <form>
// //           <div >
// //             <label htmlFor="name" className="block text-sm font-medium text-gray-700">Enter Product Name </label>
// //             <input 
// //               type="text" 
// //               value={name} 
// //               onChange={(e) => setName(e.target.value)} 
// //               className="font-semibold text-lg  p-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105" 
// //             />
// //           </div>

// //           <div className="mb-4">
// //             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Enter Product Price </label>
// //             <input 
// //               type="email" 
// //               value={email} 
// //               onChange={(e) => setEmail(e.target.value)} 
// //               className="font-semibold text-lg  p-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105" 
// //             />
// //           </div>

// //           <div className="mb-4">
// //             <label htmlFor="password" className="block text-sm font-medium text-gray-700">Enter Product Category</label>
// //             <input 
// //               type="password" 
// //               value={password} 
// //               onChange={(e) => setPassword(e.target.value)} 
// //               className="font-semibold text-lg  p-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105" 
// //             />
// //           </div>
// //           <div className="mb-4">
// //             <label htmlFor="password" className="block text-sm font-medium text-gray-700">Enter Product Category</label>
// //             <input 
// //               type="password" 
// //               value={password} 
// //               onChange={(e) => setPassword(e.target.value)} 
// //               className="font-semibold text-lg  p-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105" 
// //             />
// //           </div>
// //           <div className="mb-2">
// //             <label htmlFor="password" className="block text-sm font-medium text-gray-700">Enter Product Category</label>
// //             <input 
// //               type="password" 
// //               value={password} 
// //               onChange={(e) => setPassword(e.target.value)} 
// //               className="font-semibold text-lg p-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105" 
// //             />
// //           </div>
          
// //           <div className="flex items-center justify-center ">
// //             <button 
// //               type="submit" 
// //               className="w-[150px] h-[50px] justify-center text-lg items-center flex bg-gray-900 text-white p-2 rounded-md hover:bg-gray-800 hover:text-teal-400 transform hover:scale-105 transition duration-300 ease-in-out"
// //             >
// //               <span className="relative">Add Product</span>
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AddProduct;
import React from 'react';


const AddProduct = () => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [ error, setError]=React.useState("");
  // callback function of form submit is here
  const addProduct = async (e) => {
e.preventDefault();
    // for the form validation

    if(!name || !price || !category || !company)
     {
      setError(true);
      return(false);
    }
   

    const userId= JSON.parse(localStorage.getItem("User"))._id;
    

   

    try {
      let result = await fetch("http://localhost:5000/add-product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          price,
          category,
          company,  
          userId
        })
      });

      result = await result.json();
      console.warn(result);

      // Clear the form fields after submission
      setName("");
      setPrice("");
      setCategory("");
      setCompany("");
    } catch (error) {
      console.error("Error while calling the API", error);
    }
  };

  return (
    <div className="  flex items-center justify-center w-full  ">
      <div className=" p-2.5 rounded-lg max-w-md w-[500px]  ">
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">Add Product</h2>

        <form onSubmit={addProduct}>
          <div className="mb-2  ">
            <label htmlFor="name" className="block text-xs font-medium text-gray-700">Enter Product Name</label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              className="font-semibold text-lg p-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105" 
            />
             {error && !name && <p className="text-red-500 text-xs font-semibold animate-shake">Enter valid Name.</p>}
          </div>

          <div className="mb-2">
            <label htmlFor="price" className="block text-xs font-medium text-gray-700">Enter Product Price</label>
            <input 
              type="text" 
              value={price} 
              onChange={(e) => setPrice(e.target.value)} 
              className="font-semibold text-lg p-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105" 
            />
            {error && !price && <p className="text-red-500 text-xs font-semibold animate-shake">Enter valid Price.</p>}

          </div>

          <div className="mb-2">
            <label htmlFor="category" className="block text-xs font-medium text-gray-700">Enter Product Category</label>
            <input 
              type="text" 
              value={category} 
              onChange={(e) => setCategory(e.target.value)} 
              className="font-semibold text-lg p-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105" 
            />
            {error && !category && <p className="text-red-500 text-xs font-semibold animate-shake">Enter valid Category.</p>}

          </div>

          <div className="mb-2">
            <label htmlFor="company" className="block text-xs font-medium text-gray-700">Enter Product Company</label>
            <input  
              type="text" 
              value={company} 
              onChange={(e) => setCompany(e.target.value)} 
              className="font-semibold text-lg p-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105" 
            />
          {error && !company && <p className="text-red-500 text-xs font-semibold animate-shake">Enter valid Company.</p>}

          </div>

         
          <div className='mt-2'>
          <div className="flex items-center justify-center ">
            <button 
              type="submit" 
              className="w-[150px] h-[50px]   justify-center text-lg items-center flex bg-gray-900 text-white p-2 rounded-md hover:bg-gray-800 hover:text-teal-400 transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <span className="relative">Add Product</span>
            </button>
          </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;


// import React, { useState } from 'react';

// const AddProduct = () => {
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [category, setCategory] = useState("");
//   const [company, setCompany] = useState("");

//   const addProduct = (e) => {
//     e.preventDefault();
//     // add product logic here
//     console.log("Product added", { name, price, category, company });
//     setName("");
//     setPrice("");
//     setCategory("");
//     setCompany("");
//   };

//   return (
//     <div className="bg-gray-100 flex items-center justify-center w-full ">
//       <div className="bg-white p-5 mt-1 rounded-lg shadow-lg w-[500px]   max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
//         <h2 className="text-2xl font-semibold mb-3 text-gray-800 text-center">Add Product</h2>

//         <form onSubmit={addProduct}>
//           <div className="mb-4">
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">Enter Product Name</label>
//             <input 
//               type="text" 
//               value={name} 
//               onChange={(e) => setName(e.target.value)} 
//               className="font-semibold text-lg p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105" 
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="price" className="block text-sm font-medium text-gray-700">Enter Product Price</label>
//             <input 
//               type="text" 
//               value={price} 
//               onChange={(e) => setPrice(e.target.value)} 
//               className="font-semibold text-lg p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105" 
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="category" className="block text-sm font-medium text-gray-700">Enter Product Category</label>
//             <input 
//               type="text" 
//               value={category} 
//               onChange={(e) => setCategory(e.target.value)} 
//               className="font-semibold text-lg p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105" 
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="company" className="block text-sm font-medium text-gray-700">Enter Product Company</label>
//             <input 
//               type="text" 
//               value={company} 
//               onChange={(e) => setCompany(e.target.value)} 
//               className="font-semibold text-lg p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105" 
//             />
//           </div>

//           <div className="flex items-center justify-center mt-6">
//             <button 
//               type="submit" 
//               className="w-full max-w-xs h-[50px] justify-center text-lg items-center flex bg-gray-900 text-white p-2 rounded-md hover:bg-gray-800 hover:text-teal-400 transform hover:scale-105 transition duration-300 ease-in-out"
//             >
//               <span className="relative">Add Product</span>
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddProduct;

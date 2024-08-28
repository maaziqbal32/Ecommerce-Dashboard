import React, { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';

const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState("");

  const navigate=useNavigate();

  const params = useParams();

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      let result = await fetch(`http://localhost:5000/product/${params.id}`);
      result = await result.json();
      setName(result.name);
      setPrice(result.price);
      setCategory(result.category);
      setCompany(result.company);
    } catch (error) {
      console.error(error);
    }
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!name || !price || !category || !company) {
      setError("All fields are required.");
      return;
    }

    try {
      let result = await fetch(`http://localhost:5000/product/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, price, category, company }),
      });

      if (!result.ok) {
        throw new Error(`HTTP error! Status: ${result.status}`);
      }

      // Optionally handle response
      let data = await result.json();
      console.log('Product updated successfully:', data);

      // Clear the form fields after submission
      setName("");
      setPrice("");
      setCategory("");
      setCompany("");
      setError(""); // Clear error if successful
    } catch (error) {
      console.error("Error updating product:", error);
      setError("Error updating product.");
    }
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center w-full mt-10">
      <div className="p-2.5 rounded-lg max-w-md w-[500px]">
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">Update Product</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="name" className="block text-xs font-medium text-gray-700">Enter Product Name</label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              className="font-semibold text-lg p-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105" 
            />
            {error && !name && <p className="text-red-500 text-xs font-semibold animate-shake">{error}</p>}
          </div>

          <div className="mb-2">
            <label htmlFor="price" className="block text-xs font-medium text-gray-700">Enter Product Price</label>
            <input 
              type="text" 
              value={price} 
              onChange={(e) => setPrice(e.target.value)} 
              className="font-semibold text-lg p-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105" 
            />
            {error && !price && <p className="text-red-500 text-xs font-semibold animate-shake">{error}</p>}
          </div>

          <div className="mb-2">
            <label htmlFor="category" className="block text-xs font-medium text-gray-700">Enter Product Category</label>
            <input 
              type="text" 
              value={category} 
              onChange={(e) => setCategory(e.target.value)} 
              className="font-semibold text-lg p-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105" 
            />
            {error && !category && <p className="text-red-500 text-xs font-semibold animate-shake">{error}</p>}
          </div>

          <div className="mb-2">
            <label htmlFor="company" className="block text-xs font-medium text-gray-700">Enter Product Company</label>
            <input  
              type="text" 
              value={company} 
              onChange={(e) => setCompany(e.target.value)} 
              className="font-semibold text-lg p-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105" 
            />
            {error && !company && <p className="text-red-500 text-xs font-semibold animate-shake">{error}</p>}
          </div>

          <div className='mt-2'>
            <div className="flex items-center justify-center">
              <button 
                type="submit" 
                className="w-[150px] h-[50px] mt-5 justify-center text-lg items-center flex bg-gray-900 text-white p-2 rounded-md hover:bg-gray-800 hover:text-teal-400 transform hover:scale-105 transition duration-300 ease-in-out"
              >
                <span className="relative">Update Product</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;

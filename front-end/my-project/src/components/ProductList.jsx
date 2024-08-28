import React, { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Link } from 'react-router-dom';


const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [tableVisible, setTableVisible] = useState(false);

    useEffect(() => {
        getProducts();
    }, []); // Added dependency array to ensure useEffect runs only once on mount

    const getProducts = async () => {
        let result = await fetch('http://localhost:5000/products');
        result = await result.json();
        setProducts(result);
        setTableVisible(true); // Show table after data is fetched
    };

    const tableAnimation = useSpring({
        opacity: tableVisible ? 1 : 0,
        transform: tableVisible ? 'translateY(0)' : 'translateY(-20px)',
        config: { tension: 200, friction: 15 }
    });

    const handleUpdate = (id) => {
        // Handle update logic here
        console.log(`Update product with id: ${id}`);
    };

    const handleDelete = async (id) => {
    //   console.log(`Delete product with id: ${id}`);
      let result = await fetch(`http://localhost:5000/product/${id}`,{
        method: 'DELETE'
      });
       result= await result.json();
       if(result){
    //    remaining products will show without refresh the page
       getProducts()
       }

    };

   

    return (
        <>
            <div>
                <h1 className='text-2xl font-bold flex justify-center mt-10'>Product List</h1>
            </div>
            <div className='flex justify-center text-center mt-5'>
                <div className='w-[700px]'>
                    <animated.table style={tableAnimation} className='min-w-full border-collapse'>
                        <thead>
                            <tr className='bg-gray-800 text-white'>
                                <th className='py-2 px-4 border-b border-gray-200'>S.No</th>
                                <th className='py-2 px-4 border-b border-gray-200'>Name</th>
                                <th className='py-2 px-4 border-b border-gray-200'>Price</th>
                                <th className='py-2 px-4 border-b border-gray-200'>Category</th>
                                <th className='py-2 px-4 border-b border-gray-200'>Operations</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => (
                                <tr key={product._id} className='odd:bg-gray-100 even:bg-white'>
                                    <td className='py-2 px-4 border-b border-gray-200'>{index + 1}</td>
                                    <td className='py-2 px-4 border-b border-gray-200'>{product.name}</td>
                                    <td className='py-2 px-4 border-b border-gray-200'>{product.price}</td>
                                    <td className='py-2 px-4 border-b border-gray-200'>{product.category}</td>
                                    <td className='py-2 px-4 border-b border-gray-200'>
                                        <Link to={"/update/"+product._id}
                                            // onClick={() => handleUpdate(product._id)}
                                            className='bg-blue-500 text-white py-1 px-3 rounded mr-2 hover:bg-blue-600'>
                                            Update
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(product._id)}
                                            className='bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600'>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </animated.table>
                </div>
            </div>
        </>
    );
};

export default ProductList;

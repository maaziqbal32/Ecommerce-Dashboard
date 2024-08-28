
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import PrivateCom from './components/PrivateCom';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateProduct';

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Nav />
          {/* <h1 className="text-3xl font-bold md:flex space-x-5 ">
      E-Dashboard
    </h1> */}

          <Routes>
            {/* first 5 navlinks are in private components */}
            <Route element={<PrivateCom />}>
            <Route path="/" element={<ProductList/>}/>
            <Route path="/add" element={<h1 className="text-3xl font-bold md:flex space-x-5 " ><AddProduct/></h1> }/>
            <Route path="/update/:id" element={ <UpdateProduct/> }/>
            <Route path="/logout" element={<h1 className="text-3xl font-bold md:flex space-x-5 " >Logout component</h1>}/>
            <Route path="/profile" element={<h1 className="text-3xl font-bold md:flex space-x-5 " >Profile Component</h1>}/>
            </Route>
            <Route path="/signup" element={<h1 className="text-3xl font-bold md:flex space-x-5 " ><SignUp/></h1>}/>
            <Route path="/login" element={<h1 className="text-3xl font-bold md:flex space-x-5 " ><Login/></h1>}/>

                    
          </Routes>
        </BrowserRouter>
        <Footer/>
      </div>
    </>
  )
}

export default App

import React from 'react'
import {Navigate,Outlet} from 'react-router-dom'

const PrivateCom = () => { 
      const auth=localStorage.getItem('User');
      return auth?<Outlet/>:<Navigate to="/signup"/>;
}

export default PrivateCom
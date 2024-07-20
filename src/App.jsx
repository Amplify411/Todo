import React from'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./css-files/style.css"
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import Edit from './pages/Edit';
import Details from './pages/Details';
function App() {
  const router = createBrowserRouter([
    { path: '/',element: <Login />},
    { path: '/login',element: <Login />},
    { path: '/signup', element: <Signup />},
    { path: '/home', element: <Home />},
    { path: '/edit', element: <Edit />},
    { path: '/details', element: <Details />}, 

  ]);

  return (
    <RouterProvider router={router} />
    
  );
}

export default App;

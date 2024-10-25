// src/App.jsx
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Components/Root';
import Login from './Components/Login';
import ErrorPage from './Components/ErrorPage';
import Register from './Components/Register';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />, // Root component with Nav, Outlet, and Footer
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Login />, // Login component to be rendered in the Outlet
          errorElement: <ErrorPage/>
        },
        {
          path: 'register', // Non-nested route (register is not under Root)
          element: <Register />,
          errorElement: <ErrorPage />,
        },
      ],
    },
    
  ]);

  return <RouterProvider router={router} />;
}

export default App;

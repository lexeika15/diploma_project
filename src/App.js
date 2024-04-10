import React from 'react';
import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import StartPage from './Pages/StartPage/StartPage';
import Authorization from './Pages/Authorization/Authorization';
import Profile from './Pages/Profile/Profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/start_page" />,
  },
  {
    path: '/start_page',
    element: <StartPage />,
  },
  {
    path: '/authorization',
    element: <Authorization />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
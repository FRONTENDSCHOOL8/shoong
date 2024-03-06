import '@/styles/tailwind.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './Layout/RootLayout/RootLayout';
import Exchange from './pages/Exchange/Exchange';
import { phocaData } from './loader/index';
import MeetUp from './pages/MeetUp/MeetUps';
import Profile from './pages/Profile/Profile';
import Home from './pages/Home/Home';
import Chatting from './pages/Chatting/Chatting';
import Alerts from './pages/Alerts/Alerts';
import Like from './pages/Like/Like';
import Login from './pages/Login/Login';
import ColloectBookDetail from './pages/ColloectBookDetail/ColloectBookDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: phocaData,
      },
      {
        path: '/exchange',
        element: <Exchange />,
        loader: phocaData,
      },
      {
        path: '/meetup',
        element: <MeetUp />,
      },
      {
        path: '/profile',
        element: <Profile />,
        loader: phocaData,
      },
      {
        path: '/collectBook/:group/:id',
        element: <ColloectBookDetail />,
        loader: phocaData,
      },
      {
        path: '/Like',
        element: <Like />,
      },
      {
        path: '/Login',
        element: <Login />,
      },
    ],
  },
  {
    path: '/chatting',
    element: <Chatting />,
  },
  {
    path: '/alerts',
    element: <Alerts />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

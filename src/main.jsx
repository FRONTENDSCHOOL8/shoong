import '@/styles/tailwind.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './Layout/RootLayout/RootLayout';
import Exchange from './pages/Exchange/Exchange';
import { phocaData } from './loader/index';
import detailData from './loader/phocaDetail';
import MeetUp from './pages/MeetUp/MeetUps';
import Profile from './pages/Profile/Profile';
import Home from './pages/Home/Home';
import Chatting from './pages/Chatting/Chatting';
import Alerts from './pages/Alerts/Alerts';
import Like from './pages/Like/Like';
import Login from './pages/Login/Login';
import userData from './loader/userData';
import ExchangeDetail from './pages/ExchangeDetail/ExchangeDetail';

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
        loader: detailData,
      },
      {
        path: '/exchangeDetail/:id',
        element: <ExchangeDetail />,
        loader: detailData,
      },
      {
        path: '/meetup',
        element: <MeetUp />,
      },
      {
        path: '/profile',
        element: <Profile />,
        loader: userData,
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

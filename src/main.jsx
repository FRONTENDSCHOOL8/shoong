import '@/styles/tailwind.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './Layout/RootLayout/RootLayout';
import App from './App';
import Exchange from './pages/Exchange/Exchange';
import MeetUp from './pages/MeetUp/MeetUps';
import Profile from './pages/Profile/Profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/exchange',
        element: <Exchange />,
      },
      {
        path: '/meetup',
        element: <MeetUp />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Join from './pages/Join';
import Dashboard from './pages/Dashboard';
import MentorsPage from './pages/MentorsPage';
import ProfilePage from './pages/ProfilePage';
import AboutPage from './pages/AboutPage';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/join',
    element: <Join />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/mentors',
    element: <MentorsPage />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
]);

export default routes;

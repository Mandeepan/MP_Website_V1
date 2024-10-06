import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import EmailForm from './components/EmailForm';
import NotFoundPage from './components/NotFoundPage';
import Footer from './components/Footer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/experience',
    element: <Experience />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '/emailform',
    element: <EmailForm />,
  },
  {
    path:"*",
    element: <NotFoundPage />
  }
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
};

export default App;
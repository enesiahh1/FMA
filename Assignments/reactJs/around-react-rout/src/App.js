import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './css/fma-general.css';
import './css/fma-responsive.css';
import './css/homeStyle.css';

import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import ContactUs from './pages/ContactUs';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/services', element: <Services /> },
  { path: '/portfolio', element: <Portfolio /> },
  { path: '/blog', element: <Blog /> },
  { path: '/blog-deatils', element: <BlogDetails /> },
  { path: '/contact-us', element: <ContactUs /> }
]);

/** 
                  <li><a href="/services">Services</a></li>
                  <li><a href="/portfolio">Portfolio</a></li>
                  <li><a href="/blog">Blog</a></li>
                  <li><a href="/blog-details">Blog Details</a></li>
                  <li><a href="/contact-us">Contact us</a></li> */

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

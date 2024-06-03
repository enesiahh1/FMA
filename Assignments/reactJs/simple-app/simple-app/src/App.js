import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Fall from './pages/Fall.jsx';
import Spring from './pages/Spring.jsx';
import Summer from './pages/Summer.jsx';
import Winter from './pages/Winter.jsx';

const router = createBrowserRouter([
  { path: '/', element: <Fall /> },
  { path: '/summer', element: <Summer /> },
  { path: '/winter', element: <Winter /> },
  { path: '/spring', element: <Spring /> },
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

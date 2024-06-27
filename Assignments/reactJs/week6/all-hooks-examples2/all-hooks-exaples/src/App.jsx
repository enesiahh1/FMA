import './App.css';
import Counter from './views/Counter';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ToggleVisibility from './views/ToggleVisibility';

const router = createBrowserRouter([
  { path: '/', element: <Counter /> },
  { path: '/toggle-visibility', element: <ToggleVisibility /> },
  { path: '/input-field', element: <Counter /> }
])

function App() {


  return (
    <>
      <h1>React Hooks</h1>
      <RouterProvider router={router} />
    </>
  )
}

export default App

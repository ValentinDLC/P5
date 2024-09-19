import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    errorElement: <h1>404 not found</h1>
  },
  {
    path:"/Cards",
    element: <h1>Nos Appartements</h1>
  },
  {
    path:"/About",
    element: <h1>A propos</h1>
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './css/index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

//routes
import Home from "./routes/Home.tsx";

const router = createBrowserRouter([ // o createBrowserRouter é um método que recebe um array de rotas e retorna um objeto de roteamento
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} /> {/* o routerProvider é um componente que recebe o router e o repassa para todos os componentes filhos que precisam de acesso ao roteamento 
 */}
  </React.StrictMode>,
)

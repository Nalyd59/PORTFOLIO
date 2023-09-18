import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import Home from './pages/home/Home';
import Connexion from "./pages/connexion/Connexion";
import Inscription from "./pages/inscription/Inscription";
import Contact from "./pages/contact/Contact";
import Admin from "./pages/admin/Admin";
import DashAdmin from "./pages/admin/DashboardAdmin";
import NotFound from "./pages/notFound/NotFound";
import Footer from './components/footer/Footer';
import { Toaster } from 'react-hot-toast';
import Dashboard from './pages/dashboard/Dashboard';

// Creation du browser router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/connexion",
    element: <Connexion />
  },
  {
    path: "/inscription",
    element: <Inscription />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "*",
    element: <NotFound />
  },
  {
    path: "/admin",
    element: <Admin />
  },
  {
    path: "/dashadmin",
    element: <DashAdmin />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Toaster/>
    <RouterProvider router={router} style={{margin: '100px'}}></RouterProvider>
    <Footer/>
  </React.StrictMode>
);

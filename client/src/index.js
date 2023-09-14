import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import Home from './pages/home/Home';
import Connexion from "./pages/connexion/Connexion";
import Inscription from "./pages/inscription/Inscription";
import Contact from "./pages/contact/Contact";
import Competences from "./pages/competences/Competences";
import Formations from "./pages/formations/Formations";
import Projets from "./pages/projets/Projets";
import NotFound from "./pages/notFound/NotFound";
import Navbar from './components/Navbar/Navbar';
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
    path: "/competences",
    element: <Competences />
  },
  {
    path: "/formations",
    element: <Formations />
  },
  {
    path: "/projets",
    element: <Projets />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "*",
    element: <NotFound />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Navbar/>
    <Toaster/>
    <RouterProvider router={router} style={{margin: '100px'}}></RouterProvider>
    <Footer/>
  </React.StrictMode>
);

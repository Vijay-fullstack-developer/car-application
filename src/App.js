
import './App.css';
import Home from './sub-page/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Service from './sub-page/Service';
import Feature_car from './sub-page/Feature_car';
import New_car from './sub-page/New_car';
import Brands from './sub-page/Brands';
import Contact from './sub-page/Contact';

const router = createBrowserRouter([
  {
    path:"/home",element:<Home/>
  },
  {
    path:"/service",element:<Service/>
  },
  {
    path:"/featured_cars",element:<Feature_car/>
  },
  {
    path:"/new_cars",element:<New_car/>
  },
  {
    path:"/brands",element:<Brands/>
  },
  {
    path:"/contact",element:<Contact/>
  }
]);

export default function App() {
  return (
    <RouterProvider router={router}/>
   
  );
}

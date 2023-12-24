import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../layout/main/Main";
import Allproduct from "../pages/allProduct/Allproduct";
import ProductDetails from "../pages/productDetails/ProductDetails";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[{
        path:'/',
        element:<Allproduct></Allproduct>
      },
      {
        path:"/products/:id",
        element:<ProductDetails></ProductDetails>,
        loader:({params}) => fetch(`http://localhost:3000/products/${params.id}`)
      },
    ]
  }
    
  ]);

  export default router
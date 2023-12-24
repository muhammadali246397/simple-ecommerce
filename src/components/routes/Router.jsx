import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../layout/main/Main";
import Allproduct from "../pages/allProduct/Allproduct";
import ProductDetails from "../pages/productDetails/ProductDetails";
import SignIn from "../pages/authentication/signIn/SignIn";
import SignUp from "../pages/authentication/signUp/signUp";

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
        loader:({params}) => fetch(`https://sore-jade-alligator-ring.cyclic.app/products/${params.id}`)
      },
      {
        path:'/signIn',
        element:<SignIn></SignIn>
      },
      {
        path:'/signUp',
        element:<SignUp></SignUp>
      }
    ]
  }
    
  ]);

  export default router
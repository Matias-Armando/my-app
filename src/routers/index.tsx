import { AppLayout } from "@/layout/app-layout";
import HomePage from "@/pages/home-page";
import { createBrowserRouter } from "react-router-dom";

export  const router = createBrowserRouter([
    {
        
    path: "/",
    element: <AppLayout/>,
    children: [
        { 

           index: true,
              element: <HomePage/>, 
          }]
    

    }



    
])

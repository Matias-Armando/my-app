import {RouterProvider } from "react-router-dom"
import { router } from "./routers"
import { SpeedInsights } from "@vercel/speed-insights/next"

function App() {
  

  return (
    <>
     <SpeedInsights />
      <RouterProvider router={router}/>
      
    </> 
    
  )
}

export default App

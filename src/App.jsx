import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout'
import Mealdetails from './Pages/Mealdetails'
import Home from './Pages/Home'
import {HeroUIProvider} from "@heroui/react";
import {
  QueryClient,
  QueryClientProvider,
 
} from '@tanstack/react-query'


const queryClient = new QueryClient({
  defaultOptions:{}
})


const router = createBrowserRouter([
{path:"" , element : <Layout/> ,children :[
  {index: true , element:<Home/>},
  {path:"mealdetails/:id"  , element:<Mealdetails/>},
]
}

])


function App() {




  return (
    <>


<QueryClientProvider client={queryClient}>

<HeroUIProvider>

<RouterProvider router={router}/>

</HeroUIProvider>
</QueryClientProvider>



    </>
  )
}

export default App

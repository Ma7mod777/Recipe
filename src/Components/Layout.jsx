import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  return (<>
  

  <div className='grid sm:grid-cols-10 bg-gray-200 '>
<div className='sm:col-span-4 lg:col-span-3 xl:col-span-2'><Navbar/></div>
<div className='sm:col-span-6 lg:col-span-7 sm:pe-6 pb-20 xl:col-span-8'><Outlet/></div>

  </div>
<div><Footer/> </div>  
  </>
  )
}

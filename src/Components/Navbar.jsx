import React from 'react'
import img1 from "../assets/WhatsApp Image 2025-01-28 at 17.51.48_ca46cad3.jpg"
export default function Navbar() {
  return (<>


<button data-drawer-target="cta-button-sidebar" data-drawer-toggle="cta-button-sidebar" aria-controls="cta-button-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
   <span className="sr-only">Open sidebar</span>
   <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
   <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="cta-button-sidebar" className="z-10 fixed top-0 left-0 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div className="h-full overflow-y-auto bg-white ">

    <div className='mb-8'>
        <img className='w-full' src={img1} alt='Recipe'/>
    </div>
      <ul className="space-y-2 font-medium p-5">
         <li>
            <a href="#" className=" flex items-center p-2 text-gray-900 rounded-lg  hover:bg-orange-500 hover:scale-[105%] duration-200 group">
            <i className="fa-solid fa-plate-wheat"></i>
               <span className="ms-3">Meals</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-orange-500 group duration-200 hover:scale-[105%]">
            <i className="fa-solid fa-plate-wheat"></i>
               <span className="flex-1 ms-3 whitespace-nowrap">Ingredients</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-orange-500 group duration-200 hover:scale-[105%]">
            <i className="fa-solid fa-plate-wheat"></i>

               <span className="flex-1 ms-3 whitespace-nowrap">Area</span>
            </a>
         </li>
        
      </ul>

   </div>
</aside>



  
  </>



  )
}

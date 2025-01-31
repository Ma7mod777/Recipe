import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useState } from 'react'
import LoadingScreen from './LoadingScreen'
import { NavLink } from 'react-router-dom'

export default function Home() {

const [category, setcategory] = useState("All")

  function getAllCategories(){

return axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")


  }


 const {data , isLoading , error , isError} = useQuery({
    queryKey : "Categories",
    queryFn : getAllCategories
  })

  // console.log(data?.data?.categories);

  const Categories = data?.data?.categories
  



  function getAllMeals(){

    return axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
    
    
      }
      const res = useQuery({
        queryKey : ["AllMeals"],
        queryFn : getAllMeals
      })

      let AllMeals = res?.data?.data?.meals
      console.log(AllMeals);



console.log(category);




 

if(isLoading){return <LoadingScreen/>}


if(category!= "All"){ AllMeals = AllMeals?.filter((meal)=> meal?.strCategory == category)
}
console.log(AllMeals);
  return (<>


<h2 className='my-10 font-bold text-3xl ps-5'>Learn, Cook, Eat Your Food</h2>

<div className='flex flex-wrap my-12'>

<button id="All"  onClick={()=>setcategory("All")} className='hover:scale-[104%] duration-300 hover:bg-gray-100 hover:shadow-2xl mx-4 my-2 py-1 px-5 border-1 border-gray-400 cursor-pointer rounded-full'>All</button>
{
  Categories?.map((category , index)=>{
return <button onClick={()=>setcategory(category?.strCategory)} key={index} className= 'hover:bg-gray-100 hover:scale-[104%] duration-300 border-gray-400 hover:shadow-2xl mx-4 my-2 py-1 px-5 border-1 cursor-pointer rounded-full'>{category?.strCategory}</button>

  } )
}
</div>

<div className='grid grid-cols-4 gap-6 gap-y-20 mt-28 '>

{
  AllMeals?.map((meal)=>{
return <>
<div className='text-center bg-white rounded-3xl pb-6 group hover:scale-[104%] duration-300 hover:shadow-2xl col-span-4 lg:col-span-2 xl:col-span-1'>
<div><img className='rounded-full w-[50%] mx-auto relative -top-8 group-hover:rotate-[360deg] duration-500' src={meal.strMealThumb}/></div>
<h3 className='mt-2 font-bold text-xl'>{meal.strMeal}</h3>
<h6 className='mb-5'><i className="fa-solid fa-location-dot me-2 text-gray-500"></i>{meal.strArea}</h6>
<NavLink to={"/mealdetails/"+meal?.idMeal} className='bg-green-600 font-bold text-white rounded-full px-4 py-2 hover:bg-green-800'>View Recipe</NavLink>


</div>

</>
  })
}


</div>


</>
  )
}

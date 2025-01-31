import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom';

export default function Mealdetails() {

const {id} = useParams()

  function getMealDetails(){

    return axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    
    
      }
      const {data} = useQuery({
        queryKey : ["MealDetails"],
        queryFn : getMealDetails
      })

const mealsDetails = data?.data?.meals[0]



  return ( <>
 
 <div>
  
 <h1 className='text-6xl font-bold mb-8'>{mealsDetails?.strMeal}</h1>
  
  <div className='grid grid-cols-3 gap-x-4'>
   <div className='text-center col-span-3 lg:col-span-1'>
    <img className='mb-8 rounded-2xl ' src={mealsDetails?.strMealThumb} alt='image' />
    <a target='blank' href={mealsDetails?.strYoutube}><button className='bg-red-700 text-white px-2 py-1 rounded-lg me-2.5'><i className="fa-brands fa-youtube me-2 "></i> youtube</button></a>
    <a target='blank' href={mealsDetails?.strSource}><button className='bg-green-700 text-white px-2 py-1 rounded-lg'><i className="fa-solid fa-globe me-2"></i>source</button></a>

   </div>

   <div className="col-span-3 lg:col-span-1">

    <p className='font-bold text-lg'>{mealsDetails?.strInstructions}</p>
   </div>


   <div className="col-span-3 lg:col-span-1">
     <table className='w-full rounded-3xl bg-white'>

      <h2 className='px-10 border-b-4 border-gray-300 font-bold w-[95%] mx-auto text-2xl py-3'>Ingredients</h2>

    <tbody  className=''>
    
    {mealsDetails?.strIngredient1!= "" &&   <tr className= 'py-2 px-10 flex justify-between border-b-2 border-gray-300 font-bold'> <td>{mealsDetails?.strIngredient1}</td>  <td>{mealsDetails?.strMeasure1}</td> </tr>}
    {mealsDetails?.strIngredient2!= "" &&   <tr className= 'py-2 px-10 flex justify-between border-b-2 border-gray-300 font-bold'> <td>{mealsDetails?.strIngredient2}</td>  <td>{mealsDetails?.strMeasure2}</td> </tr>}
    {mealsDetails?.strIngredient3!= "" &&   <tr className= 'py-2 px-10 flex justify-between border-b-2 border-gray-300 font-bold'> <td>{mealsDetails?.strIngredient3}</td>  <td>{mealsDetails?.strMeasure3}</td> </tr>}
    {mealsDetails?.strIngredient4!= "" &&   <tr className= 'py-2 px-10 flex justify-between border-b-2 border-gray-300 font-bold'> <td>{mealsDetails?.strIngredient4}</td>  <td>{mealsDetails?.strMeasure4}</td> </tr>}
    {mealsDetails?.strIngredient5!= "" &&   <tr className= 'py-2 px-10 flex justify-between border-b-2 border-gray-300 font-bold'> <td>{mealsDetails?.strIngredient5}</td>  <td>{mealsDetails?.strMeasure5}</td> </tr>}
    {mealsDetails?.strIngredient6!= "" &&   <tr className= 'py-2 px-10 flex justify-between border-b-2 border-gray-300 font-bold'> <td>{mealsDetails?.strIngredient6}</td>  <td>{mealsDetails?.strMeasure6}</td> </tr>}
    {mealsDetails?.strIngredient7!= "" &&   <tr className= 'py-2 px-10 flex justify-between border-b-2 border-gray-300 font-bold'> <td>{mealsDetails?.strIngredient7}</td>  <td>{mealsDetails?.strMeasure7}</td> </tr>}
    {mealsDetails?.strIngredient8!= "" &&   <tr className= 'py-2 px-10 flex justify-between border-b-2 border-gray-300 font-bold'> <td>{mealsDetails?.strIngredient8}</td>  <td>{mealsDetails?.strMeasure8}</td> </tr>}
    {mealsDetails?.strIngredient9!= "" &&   <tr className= 'py-2 px-10 flex justify-between border-b-2 border-gray-300 font-bold'> <td>{mealsDetails?.strIngredient9}</td>  <td>{mealsDetails?.strMeasure9}</td> </tr>}
    {mealsDetails?.strIngredient10!= "" &&   <tr className= 'py-2 px-10 flex justify-between border-b-2 border-gray-300 font-bold'> <td>{mealsDetails?.strIngredient10}</td>  <td>{mealsDetails?.strMeasure10}</td> </tr>}
    {mealsDetails?.strIngredient11!= "" &&   <tr className= 'py-2 px-10 flex justify-between border-b-2 border-gray-300 font-bold'> <td>{mealsDetails?.strIngredient11}</td>  <td>{mealsDetails?.strMeasure11}</td> </tr>}
    {mealsDetails?.strIngredient12!= "" &&   <tr className= 'py-2 px-10 flex justify-between border-b-2 border-gray-300 font-bold'> <td>{mealsDetails?.strIngredient12}</td>  <td>{mealsDetails?.strMeasure12}</td> </tr>}
    {mealsDetails?.strIngredient13!= "" &&   <tr className= 'py-2 px-10 flex justify-between border-b-2 border-gray-300 font-bold'> <td>{mealsDetails?.strIngredient13}</td>  <td>{mealsDetails?.strMeasure13}</td> </tr>}
    {mealsDetails?.strIngredient14!= "" &&   <tr className= 'py-2 px-10 flex justify-between border-b-2 border-gray-300 font-bold'> <td>{mealsDetails?.strIngredient14}</td>  <td>{mealsDetails?.strMeasure14}</td> </tr>}
    {mealsDetails?.strIngredient15!= "" &&   <tr className= 'py-2 px-10 flex justify-between border-b-2 border-gray-300 font-bold'> <td>{mealsDetails?.strIngredient15}</td>  <td>{mealsDetails?.strMeasure15}</td> </tr>}
    {mealsDetails?.strIngredient16!= "" &&   <tr className= 'py-2 px-10 flex justify-between border-b-2 border-gray-300 font-bold'> <td>{mealsDetails?.strIngredient16}</td>  <td>{mealsDetails?.strMeasure16}</td> </tr>}
    {mealsDetails?.strIngredient17!= "" &&   <tr className= 'py-2 px-10 flex justify-between border-b-2 border-gray-300 font-bold'> <td>{mealsDetails?.strIngredient17}</td>  <td>{mealsDetails?.strMeasure17}</td> </tr>}
    {mealsDetails?.strIngredient18!= "" &&   <tr className= 'py-2 px-10 flex justify-between border-b-2 border-gray-300 font-bold'> <td>{mealsDetails?.strIngredient18}</td>  <td>{mealsDetails?.strMeasure18}</td> </tr>}
    {mealsDetails?.strIngredient19!= "" &&   <tr className= 'py-2 px-10 flex justify-between border-b-2 border-gray-300 font-bold'> <td>{mealsDetails?.strIngredient19}</td>  <td>{mealsDetails?.strMeasure19}</td> </tr>}
    {mealsDetails?.strIngredient20!= "" &&   <tr className= 'py-2 px-10 flex justify-between border-b-2 border-gray-300 font-bold'> <td>{mealsDetails?.strIngredient20}</td>  <td>{mealsDetails?.strMeasure20}</td> </tr>}


    </tbody>

     </table>



   </div>




  </div>
  
  
  
  </div> 
  </>

  )
}

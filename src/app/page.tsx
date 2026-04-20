"use client"

import FoodCard, { Food } from "@/components/FoodCard";
import { ChangeEvent, useEffect, useState } from "react";



export default  function Home() {

  const [foods, setFoods] = useState <Food[]>([])
  const [search, setSearch] = useState <string>("")
  const [searchInput, setSearchInput] = useState <string>("")

  const [filtered, setFiltered] = useState <string>("")
 

  const fetchFood = async (category: string = "",  search: string = "")=>{
const res = await fetch (`https://phi-lab-server.vercel.app/api/v1/lab/foods?category=${category}&search=${search}`)
const data = await res.json()
setFoods(data.data)
  }

  useEffect(()=>{
    fetchFood(filtered, search)
  }, [filtered, search])


  const handleSearch = ()=>{
   setSearch(searchInput)
  }
  const handleFiltered = (e:ChangeEvent<HTMLSelectElement>)=>{
    const value = e.target.value
setFiltered(value)
  }


  return (
    <div className="container mx-auto">
    <h1>All Foods : {foods.length}</h1>
    <div className="flex justify-center items-center mb-8">
      <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search" onChange={(e)=>setSearchInput(e.target.value)}/>
</label>
<button onClick={handleSearch} className="btn">Search</button>
<select defaultValue="" className="btn px-4 py-2" onChange={handleFiltered}>
  <option value="">Select a item</option>
  <option value= "burger">Burger</option>
  <option value= "pizza">Pizza</option>
  <option value="rich">Rich</option>
  <option value="dish">Dish</option>
</select>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {foods.map(food=> <FoodCard key={food.id} food = {food} />)}
    </div>
    </div>
  );
}

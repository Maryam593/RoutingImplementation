import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Header from "../Components/Header";
import instanceAxious from "../Components/axios/axios";
import CategoryCard from "../Components/CategoryCard";
const Category = () => {
  const [category, setCategory ] = useState([])
  const axiosCategory = async() => {
    try {
     const response = await instanceAxious.get("products/categories");
     console.log(response)
    setCategory(response.data)
    } catch (error) {
     console.log(error)
    }
    
   }
   useEffect(()=> {
    axiosCategory();
   },[])
  return (
    <>
    {/* <Header />; */}
    <div>
    {category.length > 0 &&
          category.map((categories) => (
            <CategoryCard title = {categories}/>
          ))}
    </div>
    </>
  )
  
 
};

export default Category;

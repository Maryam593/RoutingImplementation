import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import instanceAxious from "../Components/axios/axios";
import ProductCard from "../Components/ProductCard";
import { Navigate, useParams } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const params = useParams();
  //for searching 
  const [searchString, setSearchString] = useState("");
  const [searchedProduct, setSearchedProduct] = useState([]);
 
  const axiosProduct = async () => {
  //   try {
  //     const response = await instanceAxious.get("/products");
  //       //if we search it will filter out the rest and displays the filtered data only so!
  //     //for backup we do....
  //     console.log(response);
  //     setProduct(response.data);
  //     setSearchedProduct(response.data);
  //     console.log("API Response:", response.data);
  //   } catch (error) {
  //     console.error("Error fetching products:", error);
  //   }
  // };
  if (params.CategoryName) {
    const response = await AxiosInstance.get(
      `/products/category/${params.CategoryName}`,
    );
    if (response.data.length) {
      setProducts(response.data); // Update state only after successful fetch
      setSearchedProduct(response.data);
    } else {
      navigate("/products");
    }
  } else {
    const response = await AxiosInstance.get("/products");
    setProducts(response.data); // Update state only after successful fetch
    setSearchedProduct(response.data);
  }
};

useEffect(() => {
  // Make API calls
  axiosProduct();
}, []);

  useEffect(()=> {
    try {
      products.filter((product)=>{
        if (product.title.toLowerCase().includes(searchString.toLowerCase()))if(product.lowerCase().includes(searchString))
        return true;
      else
        return false;
      })
    } catch (error) {
      console.log(error)
    }
  },[searchString])
  
  return (
    <>
      {/* <Header /> */}
      <div class="main-container flex items-center justify-center min-h-screen">
    <div class="relative">
      <input type="text" placeholder="Search..." value={searchString} onChange={(e)=> {setSearchString(e.target.value)}}
      class="w-72 h-12 pl-10 pr-4 border-2 border-gray-300 rounded-full focus:outline-none focus:border-gray-500 mb-0"/>
      <svg class="w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 2a8 8 0 015.292 13.708l4.957 4.957-1.414 1.414-4.957-4.957A8 8 0 1110 2zm0 2a6 6 0 100 12A6 6 0 0010 4z"></path>
      </svg>
      
    </div>
  </div>
      <div className="mb-10 grid w-full grid-cols-3 space-x-7">
        {searchedProduct.length > 0 &&
          searchedProduct.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              category={product.category}
              description={product.description}
              price={product.price}
              rating={product.rating.rate}
              image={product.image}
            />
          ))}
      </div>
    </>
  );
};

export default Products;

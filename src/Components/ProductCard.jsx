import React from 'react'

const ProductCard = (props) => {
    console.log("Rendering ProductCard:", props);
  return (
    <div className='flex justify-center items-center'>
    <div className=" bg-white rounded-lg shadow-md mt-10 mb-10  overflow-auto h-96">
     
     <div className="flex justify-center mt-5">
       <img src={props.image} alt="" className="aspect-square w-1/4" />
        </div>
     <div className="px-6 py-4">
        <h5 className="text-lg font-bold">Title: {props.title}</h5>
        <p className="text-gray-700">Description : {props.description} </p>
        <h5>Price : {props.price}</h5>
        <h5>Category : {props.category}</h5>
     </div>
     <div className="px-6 pt-4 pb-2">
       <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Call to Action</button>
     </div>
</div>
</div>
  )
}

export default ProductCard

import React from "react";
import { Link } from "react-router-dom";

const RecipeItem = ({ recipeItem }) => {
  // console.log("The recipe item",RecipeItem)
  return (
    <div className=" overflow-hidden w-[300px] h-[400px] m-3 rounded-xl  shadow-[0px_4px_30px_rgba(0,0,0,0.3)]    flex flex-col items-center justify-center">
      <div className="w-[200px] h-[200px] ">
        <img
          className="w-full h-full  hover:scale-110 ease-in-out duration-300 rounded-lg shadow-[0px_4px_30px_rgba(0,0,0,0.3)]"
          src={recipeItem?.image_url}
          alt={recipeItem?.title}
        />
      </div>
      <div className="mt-6 px-4  w-full">
        <h1 className="text-xl font-bold truncate "> {recipeItem?.title} </h1>
        <h1 >By: <span className="text-sm text-cyan-700">  {recipeItem?.publisher}</span> </h1>
      </div>
      <Link to={`/details/${recipeItem.id}`}>
      <button className="bg-black px-5 py-3 mt-4 rounded-md text-white hover:scale-110 ease-in-out duration-300">Recipe Details</button>
      </Link>
    </div>
  );
};

export default RecipeItem;

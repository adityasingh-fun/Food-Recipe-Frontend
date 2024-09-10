import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../Context/GlobalState";

const Details = () => {
  const { id } = useParams();
  console.log(id);
  const [recipeDetails, setRecipeDetails] = useState(null);
  const { error, setErrorMessage, loading, favouriteList, setFavouriteList } =
    useContext(GlobalContext);

  const handleFavourite = (getCurrentId) => {
    console.log("Current Id is", getCurrentId);
    const copyFavList = [...favouriteList];
    const getCurrentIndex = copyFavList.findIndex(
      (element) => element.id === getCurrentId
    );

    if (getCurrentIndex === -1) {
      copyFavList.push(recipeDetails);
    } else {
      copyFavList.splice(getCurrentIndex, 1);
    }

    setFavouriteList(copyFavList);
  };
  console.log(favouriteList);

  const fetchRecipeDetails = async () => {
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      if (!response.ok) {
        throw new Error("Unable to fetch data. Please try again!");
      }
      const getData = await response.json();

      setRecipeDetails(getData.data.recipe);
    } catch (error) {
      setErrorMessage(`Error occured! ${error.message}`);
    }
  };

  useEffect(() => {
    fetchRecipeDetails();
  }, []);

  console.log("Recipe Details are", recipeDetails);

  return (
    <div className="flex min-h-[85vh]">
      <div className="flex flex-col justify-center w-1/2 items-center border-r-8">
        <div className="border-3xl  w-4/5 h-3/5 overflow-hidden shadow-[0px_4px_30px_rgba(0,0,0,0.6)]">
          <img
            className="w-full h-full hover:scale-110 ease-in-out duration-300 "
            src={recipeDetails?.image_url}
            alt=""
          />
        </div>
        <div className=" w-full mt-6 py-2 px-4">
          <h1 className="text-3xl font-bold "> {recipeDetails?.title} </h1>
          <h1 className="text-2xl">
            {" "}
            By:{" "}
            <span className="text-cyan-700 text-lg font-serif">
              {recipeDetails?.publisher}
            </span>{" "}
          </h1>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center  w-1/2">
        <h1 className="font-bold text-4xl  mb-6">Ingredients</h1>
        <ol className=" flex flex-col justify-start items-start list-disc text-xl font-serif font-semibold ">
          {recipeDetails?.ingredients
            ? recipeDetails?.ingredients.map((item, index) => {
                return (
                  <li >
                    <h1 className="text-xl font-serif font-semibold  ">
                      {" "}
                      {item.quantity} {item.unit} {item.description}
                    </h1>
                  </li>
                );
              })
            : null}
        </ol>
        <button
          onClick={() => handleFavourite(recipeDetails?.id)}
          className="bg-black mt-7 py-3 px-5 text-white text-xl hover:scale-110 cursor-pointer rounded-md ease-in-out duration-300"
        >
          {
            favouriteList.findIndex(element => element.id === recipeDetails?.id) === -1 ? "Add to Favourites" : "Remove from Favourites"
          }
        </button>
      </div>
    </div>
  );
};

export default Details;

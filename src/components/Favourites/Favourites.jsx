import React, { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalState";
import { Link } from "react-router-dom";

const Favourites = () => {
  const { favouriteList } = useContext(GlobalContext);
  console.log(favouriteList);
  return (
    <div>
      {favouriteList && favouriteList.length ? (
        <div className=" pt-5 min-h-[85vh] flex flex-wrap">
          {favouriteList.map((recipeItem, index) => {
            console.log("Recipe Item in fav list", recipeItem);
            console.log("Id of recipe item", recipeItem?.id);
            return (
              <div
                key={index}
                className=" overflow-hidden w-[300px] h-[400px] m-3 rounded-xl   shadow-[0px_4px_30px_rgba(0,0,0,0.3)]   flex flex-col items-center justify-center"
              >
                <div className="w-[200px] h-[200px] ">
                  <img
                    className="w-full h-full  hover:scale-110 ease-in-out duration-300 rounded-lg shadow-[0px_4px_30px_rgba(0,0,0,0.3)]"
                    src={recipeItem?.image_url}
                    alt={recipeItem?.title}
                  />
                </div>
                <div className="mt-6 px-4  w-full">
                  <h1 className="text-xl font-bold truncate ">
                    {" "}
                    {recipeItem?.title}{" "}
                  </h1>
                  <h1>
                    By:{" "}
                    <span className="text-sm text-cyan-700">
                      {" "}
                      {recipeItem?.publisher}
                    </span>{" "}
                  </h1>
                </div>
                <Link to={`/details/${recipeItem?.id}`}>
                  <button className="bg-black px-5 py-3 mt-4 rounded-md text-white hover:scale-110 ease-in-out duration-300">
                    Recipe Details
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <div className=" min-h-[85vh] flex flex-col items-center mt-40">
          <h1 className="text-4xl font-semibold ">
            No Items in favourites
          </h1>
        </div>
      )}
    </div>
  );
};

export default Favourites;

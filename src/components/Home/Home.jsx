import React, { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalState";
import RecipeItem from "../RecipeItem/RecipeItem";

const Home = () => {
  const { recipeList, loading } = useContext(GlobalContext);

  return (
    <div>
      {recipeList && recipeList.length ? (
        <div className=" pt-5 min-h-[85vh] flex flex-wrap">
          {recipeList.map((recipeItem, index) => {
            return <RecipeItem key={index} recipeItem={recipeItem} />;
          })}
        </div>
      ) : (
        <div className=" min-h-[85vh] flex flex-col items-center mt-40">
          <h1 className="text-4xl font-semibold ">
            Nothing to show. Search some recipe
          </h1>
        </div>
      )}
    </div>

    // <div className="bg-sky-100 pt-5 min-h-[85vh] flex flex-wrap">
    //   {recipeList && recipeList.length
    //     ? recipeList.map((recipeItem, index) => {
    //         console.log("The recipeItem is ",recipeItem)
    //         return <RecipeItem key={index} recipeItem={recipeItem} />;
    //       })
    //     : <div className="bg-yellow-300">
    //         <h1>Nothing to show. Search some recipe</h1>
    //     </div>
    //     }
    // </div>
  );
};

export default Home;

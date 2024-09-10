import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
export const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [recipeList, setRecipeList] = useState([]);
  const [searchParams, setSearchParams] = useState("");
  const [favouriteList, setFavouriteList] = useState([]);
  const navigate = useNavigate();


  const handleOnSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParams}`
      );
      if (!response.ok) {
        throw new Error("Unable to fetc data. Please try again");
      }
      const getData = await response.json();
      setRecipeList(getData.data.recipes);
      setSearchParams("");
      navigate('/')
    } catch (error) {
      setErrorMessage(`Error occured! ${error.message}`);
    }
  };

  console.log(recipeList);
  return (
    <GlobalContext.Provider
      value={{
        recipeList,
        setRecipeList,
        searchParams,
        setSearchParams,
        handleOnSubmit,
        loading,
        errorMessage,
        setErrorMessage,
        favouriteList,
        setFavouriteList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;

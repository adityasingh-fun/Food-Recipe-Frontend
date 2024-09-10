import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../Context/GlobalState";

const Navbar = () => {

    const {searchParams,setSearchParams, handleOnSubmit} = useContext(GlobalContext);

  return (
    <div className="flex items-center justify-between bg-sky-950 h-36 text-white p-5">
      <div className="border border-white w-28 h-28 ml-8">
        <img
          className="overflow-hidden w-full h-full"
          src="https://img.freepik.com/free-vector/hand-drawn-healthy-food-logo_23-2149651916.jpg"
          alt=""
        />
      </div>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          name="search-recipe"
          placeholder="Search recipe here"
          className="py-3 pl-3 pr-52 outline-none text-black focus:outline-sky-300 rounded"
          onChange={(event)=>setSearchParams(event.target.value)}
          value={searchParams}
        />
      </form>
      <div className="flex mr-8 px-3">
        <Link to={"/"}>
          <p className="mx-3 px-4 rounded py-2 hover:bg-white hover:text-sky-950 hover:scale-110 ease-in-out duration-300 cursor-pointer text-lg">
            Home
          </p>
        </Link>
        <Link to={'/favourites'}>
        <p className="mx-3 px-4 rounded py-2 hover:bg-white hover:text-sky-950 hover:scale-110 ease-in-out duration-300 cursor-pointer text-lg">
          Favourites
        </p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

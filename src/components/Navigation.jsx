import { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { PokemonContext } from "../context/PokemonContext";
import logo from "../assets/logo.png";

export const Navigation = () => {
  const { onInputChange, valueSearch, onResetForm } =
    useContext(PokemonContext);

  const navigate = useNavigate();

  const onSearchSubmit = (e) => {
    e.preventDefault();
    navigate("/search", {
      state: valueSearch,
    });

    onResetForm();
  };

  return (
    <div className="dark:bg-[#111827]">
      <header className="max-w-[1200px] flex-col mx-auto flex items-center justify-between px-3 gap-3">
        <Link to="/" className="logo">
          <img className="sm:w-[150px] w-[130px]" src={logo} alt="Logo" />
        </Link>
        <form className="flex items-center gap-4" onSubmit={onSearchSubmit}>
          <div className="flex items-center gap-2 border border-gray-400  rounded-3xl">
            <input
              type="search"
              name="valueSearch"
              className="sm:w-[300px] rounded-3xl w-[250px] py-2 px-3 border-none outline-none text-xs"
              value={valueSearch}
              onChange={onInputChange}
              placeholder="Search..."
            />
          </div>

          <button className="border-none outline-none rounded-3xl py-2 px-5 text-white bg-blue-700 cursor-pointer font-bold text-xs">
            Search
          </button>
        </form>
      </header>

      <Outlet />
    </div>
  );
};

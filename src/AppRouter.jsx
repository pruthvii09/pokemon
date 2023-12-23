import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { HomePage, PokemonPage, SearchPage } from "./pages";
import ThemeSwitch from "./components/ThemeSwitch";

export const AppRouter = () => {
  return (
    <div>
      <ThemeSwitch />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="pokemon/:id" element={<PokemonPage />} />
          <Route path="search" element={<SearchPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

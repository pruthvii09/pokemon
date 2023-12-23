import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";

const ThemeSwitch = () => {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="fixed sm:bottom-0 right-0 top-0 p-4" onClick={handleTheme}>
      {theme === "dark" ? (
        <div className=" bg-white p-1 flex items-center justify-center rounded-full">
          <Moon size={18} />
        </div>
      ) : (
        <div className="bg-[#111827] p-1 text-white flex items-center justify-center rounded-full">
          <Sun size={18} />
        </div>
      )}
    </div>
  );
};

export default ThemeSwitch;

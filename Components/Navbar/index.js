import Moon from "/public/icons/moon.png";
import Sun from "/public/icons/sun.png";
import Image from "next/image";
import { useState } from "react";

const Navbar = (props) => {
  const [theme, setTheme] = useState(true);
  const [text, setText] = useState(false);

  const setDarkMode = () => {
    theme
      ? document.getElementsByTagName("html")[0].classList.add("dark")
      : document.getElementsByTagName("html")[0].classList.remove("dark");
    setTheme(!theme);
  };

  const handleRiversClick = (e) => {
    setText(!text);
    props.handleShowRivers(!text);
  };

  return (
    <nav className="dark:bg-gray-800 flex-1 py-3">
      <div className="flex justify-end mr-3">
        <button className="ml-3" onClick={() => setDarkMode()}>
          {theme ? (
            <Image src={Moon} width="24" height="24" />
          ) : (
            <Image src={Sun} width="24" height="24" />
          )}
        </button>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-yellow-300 hover:bg-yellow-500 px-3 py-3 rounded"
          onClick={(e) => handleRiversClick(e)}
        >
          {text ? "Main page" : "Discover the rivers"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

import { useEffect, useState } from "react";
import { useNewsContext } from "./NewsContext";

const Navbar = () => {
  const { setNews, fetchNews } = useNewsContext();

  let timer = null;
  const onChnageHandler = (e) => {
    const searchValue = e.target.value;
    if (!searchValue) {
      return;
    }

    clearTimeout(timer);
    timer = setTimeout(async () => {
      const response = await fetchNews(`everything/?q=${searchValue}`);
      setNews(response.articles);
    }, 1000);
  };

  return (
    <>
      <div className="bg-[#061e29] shadow-sm sticky top-0 z-10">
        <div className="container">
          <div className=" navbar ">
            <div className="flex-1">
              <a className="btn btn-ghost text-xl text-white uppercase bold">
                News App
              </a>
            </div>
            <div className="flex gap-2">
              <input
                onChange={onChnageHandler}
                type="text"
                placeholder="Search"
                className="input input-bordered w-24 md:w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

import axios from "axios";
import { createContext, useContext, useState } from "react";
import api from "../config/axios";

//create context
const newsContext = createContext();

//provide context
const NewsContextProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchNews = async (url) => {
    setIsLoading(true);
    try {
      const response = await api.get(
        `${url}&apiKey=${import.meta.env.VITE_API_KEY}`,
      );
      setIsLoading(false);
      return response.data;
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  const value = {
    news,
    setNews,
    fetchNews,
    isLoading,
  };
  return (
    <>
      <newsContext.Provider value={value}>{children}</newsContext.Provider>
    </>
  );
};

//use context

const useNewsContext = () => {
  return useContext(newsContext);
};

export { NewsContextProvider, useNewsContext };

import Category from "../Compnents/Category";
import Footer from "../Compnents/Footer";
import NewsCard from "../Compnents/NewsCard";
import { useEffect, useState } from "react";

import { useNewsContext } from "../Compnents/NewsContext";
import Loader from "../Compnents/Loader";

const News = () => {
  const data = useNewsContext();

  const { news, setNews, fetchNews, isLoading } = data;

  useEffect(() => {
    (async () => {
      const data = await fetchNews("/everything/?q=pakistan");

      setNews(data.articles);
    })();
  }, []);

  return (
    <>
      <div className="container">
        <div className=" sticky top-16 z-10 bg-[#03161e]   scrollbar_none  max-w-full overflow-auto flex items-center justify-center gap-5 py-7">
          <Category />
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7.5 pb-37.5  pt-12.5">
            {news.map((newsDetails, index) => {
              if (!newsDetails.urlToImage) {
                return null;
              }
              return <NewsCard key={index} newsDetails={newsDetails} />;
            })}
          </div>
        )}
      </div>

      <div className="container"></div>
      <Footer />
    </>
  );
};

export default News;

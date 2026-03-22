import Category from "../Compnents/Category";
import Footer from "../Compnents/Footer";
import NewsCard from "../Compnents/NewsCard";

const News = () => {
  return (
    <>
      <div className="container">
        <div className=" sticky top-16 z-10 bg-[#03161e]   scrollbar_none  max-w-full overflow-auto flex items-center justify-center gap-5 py-7">
          <Category />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7.5 pb-37.5  pt-12.5">
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default News;

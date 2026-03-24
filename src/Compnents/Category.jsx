import api from "../config/axios";
import Button from "./Button";
import { useNewsContext } from "./NewsContext";

const Category = () => {
  const categories = ["general", "health", "science", "sports", "technology"];
  const { news, setNews, fetchNews } = useNewsContext();

  const categoryHandler = async (e) => {
    const cat = e.target.value;

    const data = await fetchNews(`everything/?q=${cat}`);
    console.log("this is from category", data);
    setNews(data.articles);
  };
  return categories.map((items, index) => {
    return (
      <button
        value={items}
        onClick={categoryHandler}
        className="btn btn-primary uppercase"
      >
        {items}
      </button>
    );
  });
};
export default Category;

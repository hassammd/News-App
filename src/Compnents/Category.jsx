import Button from "./Button";

const Category = () => {
  const categories = ["general", "health", "science", "sports", "technology"];
  return categories.map((items) => {
    return (
      <>
        <Button category_name={items} />
      </>
    );
  });
};
export default Category;

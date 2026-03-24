const Button = ({ category_name, categoryHandler, value }) => {
  return (
    <>
      <button onClick={categoryHandler} className="btn btn-primary uppercase">
        {category_name}
      </button>
    </>
  );
};

export default Button;

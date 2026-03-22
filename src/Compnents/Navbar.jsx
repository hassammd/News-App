const Navbar = () => {
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

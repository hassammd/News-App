const NewsCard = ({ newsDetails }) => {
  return (
    <>
      <div className="bg-[#061e29] flex flex-col">
        <figure>
          <img
            className="aspect-video object-cover"
            src={newsDetails.urlToImage}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white line-clamp-2">
            {newsDetails.title}
          </h2>
          <p className="text-white line-clamp-3">{newsDetails.description}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => window.open(newsDetails.url)}
              className="btn btn-primary mt-8"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCard;

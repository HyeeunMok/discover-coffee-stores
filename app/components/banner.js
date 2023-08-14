const Banner = props => {
  return (
    <div>
      <h1 className="my-8 text-5xl font-bold">
        <span className="text-white">Coffee</span>{' '}
        <span className="text-indigo-700">Connoisseur</span>
      </h1>
      <p className="m-2 text-white">Discover your local coffee shops!</p>
      <button
        className="h-12 px-6 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded focus:shadow-outline hover:bg-indigo-600"
        onClick={props.handleOnClick}
      >
        {props.buttonText}
      </button>
    </div>
  );
};

export default Banner;

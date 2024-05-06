// eslint-disable-next-line react/prop-types
const Loader = ({ miniLoader }) => {
  return (
    <div
      className={`flex  items-center justify-center ${
        miniLoader ? "w-full h-full" : "min-h-screen w-screen"
      }`}
    >
      <div className="p-4 rounded-md page w-fit justify-center border border-pink">
        <div className="loader"></div>
      </div>
    </div>
  );
};

export default Loader;

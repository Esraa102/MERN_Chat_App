import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center page">
      <p className="text-8xl font-bold text-pink">404</p>
      <p>This Page Not Found</p>
      <Link
        to={"/"}
        className="text-pink/80 font-bold hover:underline hover:text-pink transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;

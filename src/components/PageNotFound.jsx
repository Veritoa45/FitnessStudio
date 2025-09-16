import NotFound from "../assets/404.png";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <div className="flex-grow flex justify-center items-center">
        <img
          src={NotFound}
          alt="Page Not Found"
          className="w-[calc(100vh-270px)]"
        />
      </div>
      <Link to="/">
        <div className="btn">Volver al Inicio</div>
      </Link>
    </>
  );
};

export default PageNotFound;

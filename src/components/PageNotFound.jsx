import NotFound from "../assets/404.png";

const PageNotFound = () => {
  return (
    <div className="flex-grow flex justify-center items-center">
      <img
        src={NotFound}
        alt="Page Not Found"
        className="w-[calc(100vh-270px)]"
      />
    </div>
  );
};

export default PageNotFound;

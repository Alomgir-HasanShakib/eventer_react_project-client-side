import { useEffect, useState } from "react";
import PopulerService from "../../components/PopulerService/PopulerService";
import { Link } from "react-router-dom";

const PoppularServices = () => {
  const [services, setServices] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API}/allServices`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoader(false);
      });
  }, []);

  return (
    <div className="mt-24 mb-16 container mx-auto px-3">
      <h2 className="md:text-4xl lg:text-6xl text-3xl text-center text-primaryColor font-bold pb-16">
        Our Popular Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {!loader ? (
          services
            .slice(0, 4)
            .map((service) => (
              <PopulerService
                key={service._id}
                service={service}
              ></PopulerService>
            ))
        ) : (
          <div className="flex justify-center mt-16">
            <span className="loading loading-spinner text-error loading-lg"></span>
          </div>
        )}
      </div>
      <div className="flex justify-center">
        <Link to="/allevents">
          <button className="btn bg-primaryColor text-white text-xl mt-10 px-10">
            See All Service
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PoppularServices;

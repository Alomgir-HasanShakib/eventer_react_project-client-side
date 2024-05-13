import React from "react";
import { Link } from "react-router-dom";

const AllService = ({ service }) => {
  const {
    providerphoto,
    providerName,
    description,
    price,
    serviceName,
    imageUrl,
    _id,
    serviceArea,
  } = service;
  return (
    <div className="container mx-auto  mt-10 px-3">
      <div className="flex items-center flex-col md:flex-row max-w-full overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 ">
        <div
          className="md:w-1/3"
      //     style={{ backgroundImage: ` url(${imageUrl})` }}
        >
            <img className="w-full" src={imageUrl} alt="" />
        </div>

        <div className="md:w-2/3 p-4 md:p-4">
          <h1 className="text-xl font-bold text-gray-800 dark:text-white capitalize">
            {serviceName}
          </h1>

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {description}
          </p>

          <div className="flex mt-2 item-center">
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">
              Service Area: {serviceArea}
            </h1>
          </div>
          <div className="flex items-center mt-5">
            <img
              className="object-cover h-10 rounded-full"
              src={providerphoto}
              alt="Avatar"
            />
            <a
              href="#"
              className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
              tabIndex="0"
              role="link"
            >
              {providerName}
            </a>
          </div>

          <div className="flex flex-col md:flex-row justify-between mt-3 item-center">
            <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">
              Price : ${price}
            </h1>
            <Link to={`/details/${_id}`}>
              <button className="btn w-full bg-blue-300 border-none text-xl font-bold">
                See Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllService;

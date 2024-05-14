import { Link } from "react-router-dom";

const Bookedservice = ({ service }) => {
  const {
    providerphoto,
    providerName,
    description,
    price,
    serviceName,
    imageUrl,
    _id,
    serviceArea,
    servicestatus
  } = service;
  return (
    <div>
      <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <img
          className="object-cover w-full h-64"
          src={imageUrl}
          alt="Article"
        />

        <div className="p-6">
          <div>
            <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
              Product
            </span>
            <h2
              className="capitalize block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white  "
              tabIndex="0"
              role="link"
            >
              {serviceName}
            </h2>
            <p className="mt-2 mb-5 text-sm text-gray-600 dark:text-gray-400">
              {description}
            </p>
          </div>
          <span className="text-white ">Price: ${price}</span>
          <div className="mt-4">
          <p className="max-w-lg mt-6   capitalize text-blue-600">
            Service Status: {servicestatus}
          </p>
          <p className="max-w-lg mt-6 text-white mb-5 ">
            Service Area: {serviceArea}
          </p>
            <div className="flex items-center mb-10">
              <div className="flex items-center">
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
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookedservice;
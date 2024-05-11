import React from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const serviceitem = useLoaderData();
  const { _id } = useParams();
  const services = serviceitem.find((service) => service._id === _id);
  const {
    providerphoto,
    providerName,
    description,
    price,
    serviceName,
    imageUrl,
  } = services;
  return (
    <div>
      <Helmet><title>Service Details</title></Helmet>
      <section className="bg-white dark:bg-gray-900 py-16">
        <div className="container px-6 py-10 mx-auto">
          <div className="lg:-mx-6 lg:flex lg:items-center">
            <img
              className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]"
              src={imageUrl}
              alt=""
            />

            <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
              <p className="text-5xl font-semibold text-blue-500 ">“</p>

              <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
                {serviceName}
              </h1>

              <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400 ">
                “ {description} ”
              </p>
              <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400 ">
                Price: ${price} 
              </p>

              <h3 className="mt-6 text-lg font-medium text-blue-500 pb-5">
                {providerName}
              </h3>
              <img
                  className="object-cover h-10 rounded-full"
                  src={providerphoto}
                  alt="Avatar"
                />

              <div className="flex items-center justify-between mt-12 lg:justify-start">
                <button
                  
                  className="btn bg-primaryColor px-10 text-xl font-bold border-none text-white"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;

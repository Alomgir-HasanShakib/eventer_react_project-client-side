import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../Context/Authentication/Authentication";

// for date picker
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Details = () => {
  const { user } = useContext(AuthContext);
  const [selectedDate, setSelectedDate] = useState(null);
  

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
    serviceArea,
    providerEmail,
  } = services;

  const handleBookNowBtn = (e) => {
    e.preventDefault();
    const form = e.target;
    const serviceId = form.serviceId.value;
    const providerName = form.providerName.value;
    const price = form.price.value;
    const serviceName = form.serviceName.value;
    const imageUrl = form.imageUrl.value;
    const serviceArea = form.serviceArea.value;
    const providerEmail = form.providerEmail.value;
    const userName = user.displayName;
    const userEmail = user.email;
    const bookedData = {
      providerphoto,
      providerName,
      providerEmail,
      serviceId,
      price,
      serviceName,
      imageUrl,
      serviceArea,
      userName,
      userEmail,
    };


 // fetch data for sending server side
 fetch(`${import.meta.env.VITE_API}/addBookedService`, {
  method: "POST",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify(bookedData),
})
  .then((res) => res.json())
  .then((data) => {
    if (data.insertedId) {
      Swal.fire({
        title: "Your booking is Complete",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
        },
      });
      // navigate(location?.state ? location?.state : "/");
    }
  });




  };
  return (
    <div>
      <Helmet>
        <title>Service Details</title>
      </Helmet>
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

              <h1 className="text-2xl capitalize font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
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
               <Link to={`/bookedService/${_id}`} className="text-white bg-primaryColor border-none px-10 btn"> Book Now</Link>
               
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;

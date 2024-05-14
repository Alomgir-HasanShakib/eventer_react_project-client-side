import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ServiceToDo = ({ service }) => {
  const [ status, setstatus ] = useState("pending");
    console.log(status);
  const {
    providerphoto,
    providerName,
    price,
    serviceName,
    imageUrl,
    _id,
    serviceArea,
    servicestatus,
  } = service;

  const handleServicestatus = (e) => {
    const value = e.target.value;
    setstatus(value);
  };
  const handleupdatestatus = (_id) =>{
      const servicestatus = status
      const result = {servicestatus}
      fetch(`${import.meta.env.VITE_API}/allBookedServices/${_id}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(result),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.modifiedCount>0) {
                Swal.fire({
                  title: "Data Successfully Added to the DataBase",
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
                navigate(location?.state ? location?.state : "/manageEvent");
              }
            });
  }

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
          <div className="flex mt-2 item-center">
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">
              Service Area: {serviceArea}
            </h1>
          </div>
          <h1 className="text-xl font-bold text-gray-300">
            Service Status:
            <select
              onChange={handleServicestatus}
              className="select select-bordered w-full max-w-sm border-none outline-none  bg-transparent"
            >
              <option defaultValue={servicestatus}>{servicestatus}</option>
              <option>Working</option>
              <option>Complete</option>
            </select>
          </h1>
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
            <a >
              <button onClick={()=> handleupdatestatus(_id)} className="btn w-full bg-blue-300 border-none text-xl font-bold">
                See Details
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceToDo;

import { Link, useLocation, useNavigate } from "react-router-dom";

import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const ManageService = ({ service, setServicesData, servicesdata }) => {
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

  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_API}/allServices/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              const remainigServiceData = servicesdata.filter(
                (service) => service._id !== _id
              );
              setServicesData(remainigServiceData);
            }
          });
      }
    });
  };

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
          <p className="max-w-lg mt-6 text-white  ">
            Service Area: {serviceArea}
          </p>
          <div className="mt-4">
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
            <div className="flex flex-col md:flex-row">
              <Link
                to={`/updateService/${_id}`}
                className="btn bg-blue-500 border-none px-10 text-white mr-5 mb-5 w-full md:w-[50%]"
              >
                Edit <FaRegEdit></FaRegEdit>
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className="btn bg-red-500 border-none px-10 text-white w-full  md:w-[50%]"
              >
                Delete <MdDelete></MdDelete>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageService;
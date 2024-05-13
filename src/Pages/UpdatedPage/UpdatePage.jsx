import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UpdatePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handaleUpdateService = (e) => {
    e.preventDefault();
    const form = e.target;
    const serviceArea = form.serviceArea.value;
    const description = form.description.value;
    const price = form.price.value;
    const serviceName = form.serviceName.value;
    const imageUrl = form.imageUrl.value;
    const data = {
      serviceArea,
      description,
      price,
      serviceName,
      imageUrl,
    };

    fetch(`${import.meta.env.VITE_API}/allServices/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Service Item Successfully Update ",
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
  };
  return (
    <div>
      {" "}
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-24 mb-16 py-4">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Update Event Management Services
        </h2>

        <form onClick={handaleUpdateService}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="username"
              >
                Image URL
                <input
                  id="username"
                  type="text"
                  name="photoUrl"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </label>
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="emailAddress"
              >
                Service Name
              </label>
              <input
                id="emailAddress"
                name="serviceName"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="password"
              >
                Price
              </label>
              <input
                id="password"
                name="price"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="passwordConfirmation"
              >
                Service Area
              </label>
              <input
                id="passwordConfirmation"
                name="serviceArea"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="passwordConfirmation"
              >
                Description
              </label>
              <textarea
                id="passwordConfirmation"
                name="description"
                className="block w-full resize-none px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 leading-5 flex items-center text-white transition-colors duration-300 transform bg-primaryColor rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Update Service
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default UpdatePage;

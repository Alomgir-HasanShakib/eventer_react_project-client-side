// for date picker
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../Context/Authentication/Authentication";
import { useContext, useState } from "react";
import {
  useLoaderData,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const BookedPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedDate, setSelectedDate] = useState(null);
  const { user, loader } = useContext(AuthContext);

  const serviceitem = useLoaderData();
  const {
    providerphoto,
    providerName,
    price,
    serviceName,
    imageUrl,
    serviceArea,
    providerEmail,
    _id,
  } = serviceitem;

  const handleBookNowBtn = (e) => {
    e.preventDefault();
    const form = e.target;
    const serviceId = form.serviceId.value;
    const providerName = form.providerName.value;
    const price = form.price.value;
    const serviceName = form.serviceName.value;
    const imageUrl = form.photoUrl.value;
    const serviceArea = form.serviceArea.value;
    const providerEmail = form.providerEmail.value;
    const userName = user.displayName;
    const servicestatus = "pending";
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
      servicestatus,
      selectedDate,
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
          navigate(location?.state ? location?.state : "/bookedEvent");
        }
      });
  };
  return (
    <div>
      <Helmet><title>Booking Page</title></Helmet>
      {!loader && (
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-24 mb-16 py-4">
          <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
            Update Your Services
          </h2>

          <form onSubmit={handleBookNowBtn}>
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
                    defaultValue={imageUrl}
                    disabled
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </label>
              </div>
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="username"
                >
                  Service ID
                  <input
                    id="username"
                    type="text"
                    name="serviceId"
                    defaultValue={_id}
                    disabled
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
                  defaultValue={serviceName}
                  disabled
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
                  defaultValue={price}
                  disabled
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="passwordConfirmation"
                >
                  User Name
                </label>
                <input
                  id="passwordConfirmation"
                  name="username"
                  defaultValue={user.displayName}
                  disabled
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="passwordConfirmation"
                >
                  User Email
                </label>
                <input
                  id="passwordConfirmation"
                  name="userEmail"
                  defaultValue={user.email}
                  disabled
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="passwordConfirmation"
                >
                  Provider Name
                </label>
                <input
                  id="passwordConfirmation"
                  name="providerName"
                  defaultValue={providerName}
                  disabled
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="passwordConfirmation"
                >
                  Provider Email
                </label>
                <input
                  id="passwordConfirmation"
                  name="providerEmail"
                  defaultValue={providerEmail}
                  disabled
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
                  defaultValue={serviceArea}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="passwordConfirmation"
                >
                  Taking Date
                </label>

                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                ></DatePicker>
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <input
                type="submit"
                value="Add Service"
                className="px-8 py-2.5 leading-5 flex items-center text-white transition-colors duration-300 transform bg-primaryColor rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              />
            </div>
          </form>
        </section>
      )}
    </div>
  );
};

export default BookedPage;

import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
import AllService from "./AllService";

const AllEvents = () => {
  const services = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>All Event</title>
      </Helmet>
    <div className="mt-20m mb-10">
    {services.map((service) => (
        <AllService key={service._id} service={service}></AllService>
      ))}
    </div>
    </div>
  );
};

export default AllEvents;

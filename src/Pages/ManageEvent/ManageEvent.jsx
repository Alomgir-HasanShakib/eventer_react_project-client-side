import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../Context/Authentication/Authentication";
import ManageService from "./ManageService";

const ManageEvent = () => {
  const { user } = useContext(AuthContext);
  const servicesData = useLoaderData();
  const services = servicesData.filter(
    (service) => service.providerEmail === user.email
  );
  
  return (
    <div className="container mx-auto mt-24 mb-16 px-3">
      <Helmet>
        <title>Manage Service</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {
          services.map(service => <ManageService key={service._id} service={service}></ManageService>)
        }
      </div>
    </div>
  );
};

export default ManageEvent;

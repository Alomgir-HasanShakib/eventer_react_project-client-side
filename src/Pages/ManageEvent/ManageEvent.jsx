import { useContext, useState } from "react";
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
  const [servicesdata, setServicesData] = useState(services);

  return (
    <div className="container mx-auto mt-24 mb-16 px-3">
      <Helmet>
        <title>Manage Service</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {servicesdata.length> 0 ? (
          servicesData.map((service) => (
            <ManageService
              key={service._id}
              service={service}
              servicesdata={servicesdata}
              setServicesData={setServicesData}
            ></ManageService>
          ))
        ) : (
          <div className="text-4xl text-primaryColor text-center">
            You Have no data
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageEvent;

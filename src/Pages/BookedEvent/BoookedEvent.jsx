import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/Authentication/Authentication";
import Bookedservice from "./Bookedservice";

const BoookedEvent = () => {
  const bookedService = useLoaderData();
  const {user} = useContext(AuthContext)
 const services= bookedService.filter(service=>service.userEmail === user.email)
  return (
    <div>
      <Helmet>
        <title>Booked Service</title>
      </Helmet>
      <div className="container mx-auto px-3 grid grid-cols-1 md:grid-cols-2 gap-5  mt-16 mb-16">
        {
         services.length>0? services.map(service => <Bookedservice key={service._id} service={service}></Bookedservice>): <div className="text-4xl text-center text-primaryColor">You have no Booking Yet</div>
        }
      </div>
    </div>
  );
};

export default BoookedEvent;

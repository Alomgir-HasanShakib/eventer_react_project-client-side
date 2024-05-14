import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import ServiceToDo from "./ServiceToDo";

const EventToDo = () => {
  const services = useLoaderData();

  console.log(services);
  return (
    <div>
      <Helmet>
        <title>Event To Do</title>
      </Helmet>
      <div>
        {services.length> 0 ? (
          services.map((service) => (
            <ServiceToDo key={service._id} service={service}></ServiceToDo>
          ))
        ) : (
          <div>Haven't any Service to do</div>
        )}
      </div>
    </div>
  );
};

export default EventToDo;

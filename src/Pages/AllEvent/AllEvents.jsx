import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
import AllService from "./AllService";
import { useEffect, useState } from "react";

const AllEvents = () => {
  const [search, setSearch] = useState([]);
  const [allservices, setAllServices] = useState([]);
  // const [queri, setQueri] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const key = e.target.value;

    fetch(`${import.meta.env.VITE_API}/searched/${key}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setAllServices(data);
        } else {
          setAllServices(search);
        }
      });
  };

  console.log(search);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API}/allServices?serviceName=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setAllServices(data);

        setSearch(data);
      });
  }, [setAllServices,setSearch]);

  return (
    <div className="container mx-auto mt-16 ">
      <Helmet>
        <title>All Event</title>
      </Helmet>
      <div>
        <input
          onChange={handleSearch}
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="mt-20m mb-10">
        {allservices.map((service) => (
          <AllService key={service._id} service={service}></AllService>
        ))}
      </div>
    </div>
  );
};

export default AllEvents;

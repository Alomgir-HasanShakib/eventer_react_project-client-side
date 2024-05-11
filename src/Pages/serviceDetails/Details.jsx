import React from "react";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const serviceitem = useLoaderData();
  console.log(serviceitem);
  return <div>Details</div>;
};

export default Details;

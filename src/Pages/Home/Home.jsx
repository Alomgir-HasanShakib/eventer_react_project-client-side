import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Banner";

const Home = () => {
  return (
    <div className="mt-16 mb-16">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner></Banner>
    </div>
  );
};

export default Home;

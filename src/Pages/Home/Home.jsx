import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import PoppularServices from "./PoppularServices";
import NewsLater from "../../components/Newslatter/NewsLater";

const Home = () => {
  return (
    <div className="mt-16 mb-16">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner></Banner>
      <PoppularServices></PoppularServices>
      <NewsLater></NewsLater>
    </div>
  );
};

export default Home;

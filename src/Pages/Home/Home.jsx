import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import PoppularServices from "./PoppularServices";
import NewsLater from "../../components/Newslatter/NewsLater";
import FAQ from "../../components/FAQ/FAQ";
import CTApage from "../../components/CTA/CTApage";

const Home = () => {
  return (
    <div className="mt-16 mb-16">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner></Banner>
      <PoppularServices></PoppularServices>
      <NewsLater></NewsLater>
      <FAQ></FAQ>
      <CTApage></CTApage>
    </div>
  );
};

export default Home;

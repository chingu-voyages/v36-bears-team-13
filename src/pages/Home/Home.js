import React from "react";
import AdCards from "../../components/AdCards/AdCards";
import { ads } from "../../components/AdCards/AdCards.test.js";

const Home = () => {
  return <main>{AdCards(ads)}</main>;
};

export default Home;

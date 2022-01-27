import React from "react";
import AdCards from "../../components/AdCards/AdCards";
import { ads } from "../../components/AdCards/AdCards.test.js";

const Home = () => {
  return (
    <div className="flex-1 bg-gradient-to-br from-indigo-100 to-indigo-200 justify-center items-center">
      {AdCards(ads)}
    </div>
  );
};

export default Home;

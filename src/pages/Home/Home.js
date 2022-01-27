import React from "react";
import AdCard from "../../components/AdCard/AdCard";
import Adverts from "../../components/Adverts/Adverts";
import { ads } from "../../components/Adverts/Adverts.test.js";

const Home = () => {
  return (
    <div className="flex-1 bg-gradient-to-br from-indigo-100 to-indigo-200 justify-center items-center">
      <AdCard />
      <AdCard />
      <AdCard />
      <AdCard />
      <AdCard />
      {Adverts(ads)}
    </div>
  );
};

export default Home;

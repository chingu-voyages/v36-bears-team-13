import React from "react";
import AdCard from "../../components/AdCard/AdCard";

const Home = () => {
  return (
    <div className="flex-1 bg-gradient-to-br from-indigo-100 to-indigo-200 justify-center items-center">
      <AdCard />
      <AdCard />
      <AdCard />
      <AdCard />
    </div>
  );
};

export default Home;

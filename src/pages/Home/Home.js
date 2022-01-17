import React from "react";
import { ads } from "./dummy";
import Advert from "./Advert";
const Home = () => {
  console.log("ad", ads);
  return (
    <div className="flex-1 bg-gradient-to-br from-indigo-100 to-indigo-200 justify-center items-center">
      <ul id="adverts">
        {ads.map((ad) => (
          <Advert
            key={ad.id}
            description={ad.description}
            name={ad.name}
            availability={ad.availability}
            area={ad.area}
            childAge={ad.childAge}
            price={ad.price}
            gender={ad.gender}
            exeprience={ad.experience}
            email={ad.email}
            phone={ad.phone}
          />
        ))}
      </ul>
    </div>
  );
};

export default Home;

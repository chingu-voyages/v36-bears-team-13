import React from "react";

const AdCard = (ad) => {
  return (
    <li>
      <section className="advert">
        <div className="main">
          <hgroup>
            <h1 className="name">{ad.name}</h1>
          </hgroup>
          <p className="description">{ad.description}</p>
          <div className="main-details">
            <p className="availability">Availability: {ad.availability}</p>
            <div className="area-age">
              <p>Area: {ad.area}</p>
              <p>Child age: {ad.childAge}</p>
            </div>
          </div>
        </div>

        <div className="details">
          <div className="differentiators">
            <p>Price: {ad.price}</p>
            <p>Gender: {ad.gender}</p>
            <p>Experience: {ad.experience}</p>
          </div>
          <div className="contact-details">
            <p>Email: {ad.email}</p>
            <p>Phone: {ad.phone}</p>
          </div>
        </div>
      </section>
    </li>
  );
};

export default AdCard;

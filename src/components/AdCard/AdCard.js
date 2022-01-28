import React from "react";

const AdCard = (ad) => {
  return (
    <aside className="advert">
      <article>
        <div className="main">
          <hgroup>
            <h3 className="name">{ad.name}</h3>
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
            <small>
              <address>{ad.email}</address>
            </small>
            <small>
              <address>{ad.phone}</address>
            </small>
          </div>
        </div>
      </article>
    </aside>
  );
};

export default AdCard;

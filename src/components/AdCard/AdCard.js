import React from "react";

const AdCard = (ad) => {
  return (
    <aside>
      <article>
        <h3>{ad.name}</h3>
        <p>{ad.description}</p>
        {/* Separate details from name and description */}
        <hr />
        <p>Availability: {ad.availability}</p>
        <p>Area: {ad.area}</p>
        <p>Child age: {ad.childAge}</p>
        <hr />
        <p>Price: {ad.price}</p>
        <p>Experience: {ad.experience}</p>
        <p>Gender: {ad.gender}</p>
        <hr />
        {/* Separate email and phone from other details */}
        <small>
          <address>{ad.email}</address>
        </small>
        <small>
          <address>{ad.phone}</address>
        </small>
      </article>
    </aside>
  );
};

export default AdCard;

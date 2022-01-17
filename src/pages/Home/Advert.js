import React from "react";
import PropTypes from "prop-types";

const Advert = ({
  name,
  description,
  availability,
  area,
  childAge,
  price,
  gender,
  experience,
  email,
  phone
}) => {
  console.log("name", name);
  return (
    <li>
      <section className="card">
        <div className="main">
          <hgroup>
            <h1 className="name">{name}</h1>
          </hgroup>
          <p className="description">{description}</p>
          <div className="main-details">
            <p className="availability">Availability: {availability}</p>
            <div className="area-age">
              <p>Area: {area}</p>
              <p>Child age: {childAge}</p>
            </div>
          </div>
        </div>

        <div className="details">
          <div className="differentiators">
            <p>Price: {price}</p>
            <p>Gender: {gender}</p>
            <p>Experience: {experience}</p>
          </div>
          <div className="contact-details">
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
          </div>
        </div>
      </section>
    </li>
  );
};

export default Advert;

Advert.propTypes = {
  description: PropTypes.string,
  name: PropTypes.string,
  area: PropTypes.string,
  availability: PropTypes.string,
  childAge: PropTypes.string,
  price: PropTypes.string,
  gender: PropTypes.string,
  experience: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string
};

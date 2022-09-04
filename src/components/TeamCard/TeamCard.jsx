import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import "./TeamCard.scss";

function TeamCard({ item: { id, name, job, about, image } }) {
  const [goToNum1, setGoToNum1] = useState(false);

  return (
    <div className="Card">
      <div className="upper-container">
        <div className="image-container">
          <img src={`./images/${image}`} alt="" height="100px" width="100px" />
        </div>
        <div className="lower-container">
          <h3>{name}</h3>
          <h4>{job}</h4>
          <p>{about}</p>
          <button
            onClick={() => {
              setGoToNum1(true);
            }}
          >
            Visit Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;

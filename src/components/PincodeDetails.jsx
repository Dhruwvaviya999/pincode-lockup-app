import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import "../App.css";

const PincodeDetails = ({ message, pincodeData }) => {
  const [inputOfficeName, setInputOfficeName] = useState("");
  const postOffice = pincodeData[0].PostOffice;

  const filteredOffices = postOffice.filter((data) =>
    data.Name.toLowerCase().includes(inputOfficeName.toLowerCase())
  );

  return (
    <>
      {postOffice ? (
        <div className="pincode-details">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <p>
              <strong>Pincode: {postOffice[0].Pincode}</strong>
            </p>
            <p>
              <strong>Message: </strong>
              <span>{message}</span>
            </p>
          </div>
          <div>
            <IoSearchSharp size={20} className="search-icon" />
            <input
              type="text"
              name="post-office-name"
              value={inputOfficeName}
              id="filterInput"
              onChange={(e) => setInputOfficeName(e.target.value)}
            />
          </div>
          <div className="place-lists">
            {filteredOffices.length > 0 ? (
              filteredOffices.map((data, index) => {
                return (
                  <div key={index} className="place-info">
                    <p>Name: {data.Name}</p>
                    <p>Branch: {data.BranchType}</p>
                    <p>Delivery Status: {data.DeliveryStatus}</p>
                    <p>District: {data.District}</p>
                    <p>Division: {data.Division}</p>
                  </div>
                );
              })
            ) : (
              <h2>Couldn't find the postal data you're looking for…</h2>
            )}
          </div>
        </div>
      ) : (
        <h1 style={{ textAlign: "center" }}>{message} !</h1>
      )}
    </>
  );
};

export default PincodeDetails;

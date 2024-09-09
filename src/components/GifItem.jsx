// rafc

import React from "react";

export const GifItem = ({ title, url, id }) => {
  return (
    <div className="card">
      <img
        src={url}
        alt={title}
        style={{ maxWidth: "100%", height: "auto" }}
        onError={(e) => {
          console.error("Error loading image:", url);
          e.target.src = "https://via.placeholder.com/150";
        }}
      />
      <p>{title}</p>
    </div>
  );
};

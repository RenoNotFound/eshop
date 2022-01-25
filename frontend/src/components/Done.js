import React from "react";

const Done = ({ isDone }) => {
  return (
    <>
      {isDone === "done" ? (
        <i style={{ color: "green" }} className="fas fa-check-circle"></i>
      ) : (
        <></>
      )}
    </>
  );
};

export default Done;

import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = ({ loaderWidth, loaderHeight }) => {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{
        width: loaderWidth,
        height: loaderHeight,
        margin: "auto",
        display: "block",
      }}
    >
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
};

Loader.defaultProps = {
  loaderWidth: "50px",
  loaderHeight: "50px",
};

export default Loader;

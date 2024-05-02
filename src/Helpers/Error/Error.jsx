import style from "./Error.module.css";
import React from "react";
import PropTypes from "prop-types";

const Error = ({ text }) => {
  return (
    <div className={style.error}>
      <p>{text}</p>
    </div>
  );
};

Error.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Error;

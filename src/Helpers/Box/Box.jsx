import React from 'react';
import style from "./Box.module.css";
import PropTypes from "prop-types";

const Box = ({ children }) => {
    return (
        <div className={style.box}>
            {children}
        </div>
    );
};

Box.propTypes = {
    children: PropTypes.node.isRequired
};

export default Box;


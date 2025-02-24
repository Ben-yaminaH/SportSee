import React from "react";
import PropTypes from "prop-types";

/**
 * Function component for the spin loader when data is loading
 * @param {Object} props
 * @param {string} [props.className] - Option to add custom class names for styling.
 * @returns {JSX.Element}
 */
export default function SpinLoader({ className = "" }) {
  return (
    <section className={`spin-loader ${className}`}>
      <div className="spin-loader__ball spin-loader__ball--1"></div>
      <div className="spin-loader__ball spin-loader__ball--2"></div>
      <div className="spin-loader__ball spin-loader__ball--3"></div>
    </section>
  );
}

SpinLoader.propTypes = {
  className: PropTypes.string,
};

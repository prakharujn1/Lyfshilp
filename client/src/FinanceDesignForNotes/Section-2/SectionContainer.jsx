import React from "react";
import PropTypes from "prop-types";

const SectionContainer = ({ children, className = "" }) => {
  return (
    <section className={`py-16 px-6 ${className}`}>
      <div className="max-w-4xl mx-auto">{children}</div>
    </section>
  );
};

SectionContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default SectionContainer;

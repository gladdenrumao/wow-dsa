import React from "react";

const LearningSection = ({ title, children }) => {
  return (
    <div className="learning-section">
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
};

export default LearningSection;

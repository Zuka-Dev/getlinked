import React from "react";

const Icon = ({ number }) => {
  return (
    <div
      className="p-3 text-2xl font-bold text-white "
      style={{
        borderRadius: "26.5px",
        background: "linear-gradient(270deg, #903AFF 0%, #D434FE 100%)",
      }}
    >
      {number}
    </div>
  );
};

export default Icon;

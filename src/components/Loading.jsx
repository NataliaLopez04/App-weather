import React from "react";

const Loading = () => {
  return (
    <div className="containerLoading">
      <div className="indeterminate-progress-bar">
        <div className="indeterminate-progress-bar__progress"></div>
      </div>
      <h1>Loading...</h1>
    </div>
  );
};

export default Loading;

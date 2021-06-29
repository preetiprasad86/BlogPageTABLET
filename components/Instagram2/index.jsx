import React from "react";
import "./Instagram2.css";

function Instagram2(props) {
  const { overlapGroup1, vector2 } = props;

  return (
    <div className="instagram">
      <div className="overlap-group2-1" style={{ backgroundImage: `url(${overlapGroup1})` }}>
        <img
          className="vector-6"
          src="https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-18@2x.svg"
        />
        <img className="vector-7" src={vector2} />
      </div>
    </div>
  );
}

export default Instagram2;

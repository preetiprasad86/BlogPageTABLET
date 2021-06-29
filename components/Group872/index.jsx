import React from "react";
import FacebookAppSymbol from "../FacebookAppSymbol";
import Instagram2 from "../Instagram2";
import Twitter from "../Twitter";
import "./Group872.css";

function Group872(props) {
  const { facebookAppSymbolProps, facebookAppSymbolProps2, twitterProps } = props;

  return (
    <div className="group-87">
      <FacebookAppSymbol src={facebookAppSymbolProps.src} />
      <Instagram2 overlapGroup1={facebookAppSymbolProps2.overlapGroup1} vector2={facebookAppSymbolProps2.vector2} />
      <Twitter src={twitterProps.src} />
    </div>
  );
}

export default Group872;

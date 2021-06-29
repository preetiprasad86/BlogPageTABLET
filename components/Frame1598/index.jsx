import React from "react";
import Plus from "../Plus";
import "./Frame1598.css";

function Frame1598(props) {
  const { blogThumbnail, address, text6, text7, readMore, className, plusProps } = props;

  return (
    <div className={`frame-1598 ${className || ""}`}>
      <div className="blog-thumbnail" style={{ backgroundImage: `url(${blogThumbnail})` }}></div>
      <div className="address-1 valign-text-middle overpass-semi-bold-scarpa-flow-16px">{address}</div>
      <div className="text valign-text-middle typographyheadlineh5-extrabold-20">{text6}</div>
      <p className="text-4 typography-body-smalltext-14-regular">{text7}</p>
      <div className="frame-1587">
        <div className="read-more valign-text-middle typographybodycaption-14-semi-bold">{readMore}</div>
        <Plus src={plusProps.src} />
      </div>
    </div>
  );
}

export default Frame1598;

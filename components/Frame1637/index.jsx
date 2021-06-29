import React from "react";
import Frame1598 from "../Frame1598";
import "./Frame1637.css";

function Frame1637(props) {
  const { className, frame1598Props, frame15982Props } = props;

  return (
    <div className={`frame-1637 ${className || ""}`}>
      <Frame1598
        blogThumbnail={frame1598Props.blogThumbnail}
        address={frame1598Props.address}
        text6={frame1598Props.text6}
        text7={frame1598Props.text7}
        readMore={frame1598Props.readMore}
        className={frame1598Props.className}
        plusProps={frame1598Props.plusProps}
      />
      <Frame1598
        blogThumbnail={frame15982Props.blogThumbnail}
        address={frame15982Props.address}
        text6={frame15982Props.text6}
        text7={frame15982Props.text7}
        readMore={frame15982Props.readMore}
        className={frame15982Props.className}
        plusProps={frame15982Props.plusProps}
      />
    </div>
  );
}

export default Frame1637;

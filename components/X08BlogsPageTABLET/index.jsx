import React from "react";
import Frame144 from "../Frame144";
import Footer52 from "../Footer52";
import Frame1637 from "../Frame1637";
import Button22 from "../Button22";
import "./X08BlogsPageTABLET.css";

function X08BlogsPageTABLET(props) {
  const {
    title,
    overlapGroup1,
    address,
    text1,
    text2,
    text3,
    frame144Props,
    footer52Props,
    frame1637Props,
    frame16372Props,
    frame16373Props,
    button22Props,
  } = props;

  return (
    <div class="container-center-horizontal">
      <div className="x08-blogs-page-tablet screen">
        <div className="overlap-group">
          <div className="frame-1603">
            <Frame144 group86Props={frame144Props.group86Props} iconMenuProps={frame144Props.iconMenuProps} />
            <h1 className="title valign-text-middle typographyheadlineh4-extrabold-24">{title}</h1>
            <div className="overlap-group1" style={{ backgroundImage: `url(${overlapGroup1})` }}>
              <div className="rectangle-78"></div>
              <div className="frame-1626">
                <div className="address valign-text-middle typographybodytiny-10-regular">{address}</div>
                <div className="text-1 valign-text-middle typographyheadlineh4-extrabold-24">{text1}</div>
                <p className="text-2 typographybodysmall-12-regular">{text2}</p>
              </div>
            </div>
            <p className="text-3 typography-body-smalltext-14-regular">{text3}</p>
            <Footer52 {...footer52Props} />
          </div>
          <div className="frame-1643">
            <Frame1637
              frame1598Props={frame1637Props.frame1598Props}
              frame15982Props={frame1637Props.frame15982Props}
            />
            <Frame1637
              className={frame16372Props.className}
              frame1598Props={frame16372Props.frame1598Props}
              frame15982Props={frame16372Props.frame15982Props}
            />
            <Frame1637
              className={frame16373Props.className}
              frame1598Props={frame16373Props.frame1598Props}
              frame15982Props={frame16373Props.frame15982Props}
            />
            <Button22>{button22Props.children}</Button22>
          </div>
        </div>
      </div>
    </div>
  );
}

export default X08BlogsPageTABLET;

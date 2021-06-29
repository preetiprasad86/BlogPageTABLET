import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import X08BlogsPageTABLET from "./components/X08BlogsPageTABLET";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|08-blogs-page-tablet)">
          <X08BlogsPageTABLET {...x08BlogsPageTABLETData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const whiteData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-98@2x.svg",
};

const group86Data = {
    group85: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/group-85-7@2x.svg",
    whiteProps: whiteData,
};

const iconMenuData = {
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-159@2x.svg",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-159@2x.svg",
};

const frame144Data = {
    group86Props: group86Data,
    iconMenuProps: iconMenuData,
};

const facebookAppSymbolData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/f-1-11@2x.svg",
};

const instagram2Data = {
    overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-215@2x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-19@2x.svg",
};

const twitterData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-218@2x.svg",
};

const group872Data = {
    facebookAppSymbolProps: facebookAppSymbolData,
    facebookAppSymbolProps2: instagram2Data,
    twitterProps: twitterData,
};

const footer52Data = {
    group85: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/group-85-29@2x.svg",
    place: "Contact",
    overlapGroup: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-20@2x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-150@2x.svg",
    phone: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-212@2x.svg",
    overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-277@2x.svg",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-278@2x.svg",
    text15: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    text14: "+91 8976535221, +91 8755645342",
    contactWebuildCom: "contact@webuild.com",
    quickLinks: "Quick Links",
    aboutUs: "About Us",
    projects: "Projects",
    gallery: "Gallery",
    knowledgeTransfer: "Knowledge Transfer",
    blogs: "Blogs",
    faqs: "FAQ’s",
    group872Props: group872Data,
};

const plusData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-174@2x.svg",
};

const frame1598Data = {
    blogThumbnail: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-83-42@2x.png",
    address: "5 June 2021",
    text6: "Lorem Ipsum passages of Lorem Ipsum available",
    text7: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis sapien ac massa dapibus lacinia. Nunc et cursus quam. Cras pharetra condimentum leo,…",
    readMore: "Read More",
    className: "",
    plusProps: plusData,
};

const plus2Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-174@2x.svg",
};

const frame15982Data = {
    blogThumbnail: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-83-43@2x.png",
    address: "5 June 2021",
    text6: "Lorem Ipsum passages of Lorem Ipsum available",
    text7: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis sapien ac massa dapibus lacinia. Nunc et cursus quam. Cras pharetra condimentum leo,…",
    readMore: "Read More",
    className: "frame-1598-1",
    plusProps: plus2Data,
};

const frame1637Data = {
    frame1598Props: frame1598Data,
    frame15982Props: frame15982Data,
};

const plus3Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-174@2x.svg",
};

const frame15983Data = {
    blogThumbnail: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-83-44@2x.png",
    address: "5 June 2021",
    text6: "Lorem Ipsum passages of Lorem Ipsum available",
    text7: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis sapien ac massa dapibus lacinia. Nunc et cursus quam. Cras pharetra condimentum leo,…",
    readMore: "Read More",
    className: "frame-1598",
    plusProps: plus3Data,
};

const plus4Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-174@2x.svg",
};

const frame15984Data = {
    blogThumbnail: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-83-45@2x.png",
    address: "5 June 2021",
    text6: "Lorem Ipsum passages of Lorem Ipsum available",
    text7: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis sapien ac massa dapibus lacinia. Nunc et cursus quam. Cras pharetra condimentum leo,…",
    readMore: "Read More",
    className: "frame-1598-1",
    plusProps: plus4Data,
};

const frame16372Data = {
    className: "frame-163",
    frame1598Props: frame15983Data,
    frame15982Props: frame15984Data,
};

const plus5Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-174@2x.svg",
};

const frame15985Data = {
    blogThumbnail: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-83-46@2x.png",
    address: "5 June 2021",
    text6: "Lorem Ipsum passages of Lorem Ipsum available",
    text7: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis sapien ac massa dapibus lacinia. Nunc et cursus quam. Cras pharetra condimentum leo,…",
    readMore: "Read More",
    className: "frame-1598",
    plusProps: plus5Data,
};

const plus6Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-174@2x.svg",
};

const frame15986Data = {
    blogThumbnail: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-83-47@2x.png",
    address: "5 June 2021",
    text6: "Lorem Ipsum passages of Lorem Ipsum available",
    text7: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis sapien ac massa dapibus lacinia. Nunc et cursus quam. Cras pharetra condimentum leo,…",
    readMore: "Read More",
    className: "frame-1598-1",
    plusProps: plus6Data,
};

const frame16373Data = {
    className: "frame-163",
    frame1598Props: frame15985Data,
    frame15982Props: frame15986Data,
};

const button22Data = {
    children: "VIEW MORE",
};

const x08BlogsPageTABLETData = {
    title: "Blogs",
    overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-76-9@1x.png",
    address: "05 June 2021",
    text1: "Lorem Ipsum passages of Lorem Ipsum available",
    text2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis sapien ac massa dapibus lacinia. Nunc et cursus quam. Cras pharetra condimentum leo,…",
    text3: "There are many variations of passages of Lorem Ipsum available but the majority have suffered dummy alteration in that an some form by the injected humour or randomised words which don’t look even that slightly believable. If you are Lorem Ipsums your need to be sure there isn’t anything embarrassing. There are many variations passages of Lorem as Ipsums available but the majority have suffered that alterations in that some form by injected humour or randomised words which don’t looks even slightly that believable. If you are Lorem as Ipsum  you need to be sure there isn’t anything as embarrassing. There are many variation of passages Lorem Ipsum available but the majority have suffered that a aalteration in that some form by injected humour or randomised words which don’t look even slightly the believable.",
    frame144Props: frame144Data,
    footer52Props: footer52Data,
    frame1637Props: frame1637Data,
    frame16372Props: frame16372Data,
    frame16373Props: frame16373Data,
    button22Props: button22Data,
};


// import { ArrowDropDown } from "@material-ui/icons";
import React from "react";
import Recommendation from "../recommendation/Recommendation";
import "./rightbar.css";
import { useSelector } from "react-redux";

export default function Rightbar() {
  const name = useSelector((state) => state.user.name);
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <Recommendation type="user" />
        <Recommendation type="popular" />
        <Recommendation type="editor" />
        <button className="rightButton">
          See More
          {/* <ArrowDropDown />  */}
        </button>
      </div>
    </div>
  );
}

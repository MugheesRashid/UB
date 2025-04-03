import React from "react";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import Sixth from "../Home/components/Sixth";
import "./style.css"

function index({loading}) {
  return (
    <>
      <First loading={loading} />
      <Second />
      <Third />
      <Sixth />
    </>
  );
}

export default index;

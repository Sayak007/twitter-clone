import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import "./css/Home.css";

function Home() {
  return (
    // BEM
    <div className="home">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default Home;

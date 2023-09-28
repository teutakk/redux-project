import React from "react";
import { Route, Routes } from "react-router-dom";
import Rockets from "./Rockets";
import Dragons from "./Dragons";
import Missions from "./Missions";
import MyProfile from "./MyProfile";

const HomePage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/dragons" element={<Dragons />} />
        <Route path="/profile" element={<MyProfile />} />
      </Routes>
    </div>
  );
};

export default HomePage;

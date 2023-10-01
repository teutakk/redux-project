import React from "react";
import { Route, Routes } from "react-router-dom";
import Rockets from "./Rockets";
import Dragons from "./Dragons";
import Missions from "./Missions";
import MyProfile from "./MyProfile";

const HomePage = () => {
  return (
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/dragons" element={<Dragons />} />
      <Route path="/profile" element={<MyProfile />} />
    </Routes>
  );
};

export default HomePage;

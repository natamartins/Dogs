import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Feed from "../Feed/Feed";
import UserHead from "./UserHead";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";

const User = () => {
  return (
    <div className="container" >
      <UserHead />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
      </Routes>
    </div>
  );
};

export default User;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserPage from "./pages/UserPage";
import CreatePost from "./pages/CreatePost";
import PostView from "./pages/PostView";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-page" element={<UserPage />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/post" element={<PostView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

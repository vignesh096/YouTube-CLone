import React from "react";
import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Feed } from "@mui/icons-material";
import {
  Feed,
  SearchFeeds,
  Navbar,
  SearchBar,
  VideoDetail,
} from "./components";
import ChannelDetail from "./components/ChannelDetail";

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />

      <Routes>
        {" "}
        <Route path="/" exact element={<Feed />} />{" "}
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:SearchTerm" element={<SearchFeeds />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;

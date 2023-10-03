import React from "react";
import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "./";
import { FetchFromAPI } from "../utils/YoutubeV3API";
import { useParams } from "react-router-dom";
const SearchFeeds = () => {
  const [videos, setvideos] = useState([]);
  const { SearchTerm } = useParams();
  useEffect(() => {
    FetchFromAPI(`search?q=${SearchTerm}&part=snippet`).then(async (data) =>
      setvideos(data.items)
    );
  }, [SearchTerm]);
  return (
    <Box p={2} sx={{ overflow: "auto", height: "auto", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} color={"#fff"}>
        Search Result for :{" "}
        <span style={{ color: "#FC1503" }}>{SearchTerm}</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeeds;

import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { SideBar, Videos } from "./";
import { FetchFromAPI } from "../utils/YoutubeV3API";
const Feed = () => {
  const [selectedCategory, setselectedCategory] = useState("Treanding India");
  const [videos, setvideos] = useState([]);
  useEffect(() => {
    FetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then(
      async (data) => setvideos(data.items)
    );
  }, [selectedCategory]);
  return (
    <Stack sx={{ flexDirection: { sm: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sm: "auto", md: "95vh" },
          borderRight: "1px solid #3d3d3d",

          px: { sm: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setselectedCategory={setselectedCategory}
        />
        <Typography
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
          className="copyright"
        >
          CopyWrite in @ 2023
        </Typography>
      </Box>
      <Box p={2} sx={{ overflow: "auto", height: "auto", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} color={"#fff"}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;

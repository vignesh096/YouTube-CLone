// import React from "react";
// import { useState, useEffect } from "react";
// import { Stack, Box, Typography } from "@mui/material";
// import { Link, useParams } from "react-router-dom";
// import ReactPlayer from "react-player";
// import { ChannelCard, Videos } from "./";
// import { FetchFromAPI } from "../utils/YoutubeV3API";
// import { CheckCircle } from "@mui/icons-material";

// const VideoDetail = () => {
//   const [videoDetail, setVideoDetail] = useState(null);
//   const [videosRelated, setvideosRelated] = useState([]);
//   const { id } = useParams();

//   useEffect(() => {
//     FetchFromAPI(`videosRelated?part=snippet,statistics&id=${id}`).then(
//       (data) => setVideoDetail(data.items[0])
//     );
//     FetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
//       (data) => {
//         setvideosRelated(data.items);
//       }
//     );
//   }, [id]);

//   if (!videoDetail?.snippet) return "Loading..";
//   console.log(videoDetail);
//   const {
//     snippet: { channelId, channelTitle, description, publishedAt, title },
//     statistics: { likeCount, viewCount },
//   } = videoDetail;
//   return (
//     <Box minHeight={"92vh"} p={1}>
//       <Stack direction={{ xs: "column", md: "row" }}>
//         <Box flex={1}>
//           {/* Video box */}
//           <Box
//             sx={{
//               width: "100%",
//               position: "sticky",
//               top: "90px",
//               color: "#fff",
//             }}
//           >
//             <ReactPlayer
//               url={`https://www.youtube.com/watch?v=${id}`}
//               className="react-player"
//               controls
//             />
//             <Typography
//               variant="h5"
//               fontWeight="bold"
//               p={2}
//               sx={{ color: "#fff" }}
//             >
//               {title}
//             </Typography>
//             <Stack
//               direction={"row"}
//               justifyContent={"space-between"}
//               sx={{ color: "#fff", py: 1, px: 2 }}
//             >
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { Videos } from "./";
import { FetchFromAPI } from "../utils/YoutubeV3API";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videosRelated, setvideosRelated] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    FetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    FetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setvideosRelated(data?.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) return "Loading...";

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;
  
  return (
    <Box minHeight="95vh" sx={{ background: "black" }}>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#fff"
                >
                  {channelTitle}
                  <CheckCircleIcon
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>

        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
          sx={{ overflowY: "auto" }}
        >
          <Videos
            videos={videosRelated}
            videostyle={{
              flexwrap: "nowrap",
              videodetetions: "column",
              justifycontent: "start",
            }}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;

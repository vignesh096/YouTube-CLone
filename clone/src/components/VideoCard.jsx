// import React from "react";
// import { Link } from "react-router-dom";
// import { Stack, Typography, Card, CardContent, CardMedia } from "@mui/material";
// import { CheckCircle } from "@mui/icons-material";
// import {
//   demoChannelUrl,
//   demoVideoUrl,
//   demoVideoTitle,
// } from "../utils/constans";
// const VideoCard = ({
//   video: {
//     id: { videoId },
//     snippet,
//   },
// }) => {
//   return (
//     <Card
//       sx={{
//         width: { md: "320px", xs: "338px" },

//         borderRadius: "0",
//         boxShadow: "none",
//       }}
//     >
//       {/* // <Card sx={{ width: "320px" }}> */}
//       <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
//         <CardMedia
//           image={snippet?.thumbnails?.high?.url}
//           alt={snippet?.title}
//           sx={{ height: "180px", width: "338px" }}
//         />
//       </Link>
//       <CardContent sx={{ background: "#1e1e1e", height: "68px" }}>
//         <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
//           <Typography
//             variant="subtitle1"
//             fontWeight="bold"
//             sx={{ color: "#fff" }}
//           >
//             {snippet?.title.slice(0, 60) || demoVideoTitle}
//           </Typography>
//         </Link>

//         <Link
//           to={
//             snippet?.channelTitle
//               ? `/channel/${snippet?.channelTitle}`
//               : demoChannelUrl
//           }
//         >
//           <Typography
//             variant="subtitle2"
//             fontWeight="bold"
//             sx={{ color: "grey" }}
//           >
//             {snippet?.channelTitle.slice(0, 60) || demoVideoTitle}
//             <CheckCircle sx={{ color: "grey", ml: "5px", fontSize: "16px" }} />
//           </Typography>
//         </Link>
//       </CardContent>
//     </Card>
//   );
// };

// export default VideoCard;

import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constans";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => (
  <Card
    sx={{
      width: { xs: "100%", sm: "358px", md: "320px" },
      boxShadow: "none",
      borderRadius: 0,
    }}
  >
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
      <CardMedia
        image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
        alt={snippet?.title}
        sx={{ width: { xs: "100%", sm: "358px" }, height: 180 }}
      />
    </Link>
    <CardContent sx={{ backgroundColor: "#1E1E1E", height: "106px" }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      <Link
        to={
          snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl
        }
      >
        <Typography variant="subtitle2" color="gray">
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircleIcon
            sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
          />
        </Typography>
      </Link>
    </CardContent>
  </Card>
);

export default VideoCard;

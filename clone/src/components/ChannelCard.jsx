import React from "react";
import { Typography, Card, CardContent, CardMedia, Box } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constans";
const ChannelCard = ({ channeldetail, marginTop }) => (
  <Box
    sx={{
      borderRadius: "20px",
      boxShadow: "none",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: { xs: "338px", md: "320px" },
    }}
  >
    <Link to={`/channel/${channeldetail?.id?.channelId}`}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          color: "#fff",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          marginTop: marginTop,
        }}
      >
        <CardMedia
          image={
            channeldetail?.snippet?.thumbnails?.high?.url || demoProfilePicture
          }
          alt={channeldetail?.snippet?.title}
          sx={{
            borderRadius: "50%",
            height: "180px",
            width: "180px",
            mb: 2,
            border: "2px solid #e3e3e3",
          }}
        />
        <Typography variant="h6" sx={{ color: "#fff" }}>
          {channeldetail?.snippet?.title}
          <CheckCircle
            sx={{
              color: "grey",
              ml: "5px",

              fontSize: "16px",
            }}
          />
        </Typography>

        {channeldetail?.statistics?.subscriberCount && (
          <Typography>
            {parseInt(
              channeldetail?.statistics?.subscriberCount
            ).toLocaleString()}{" "}
            Subscribers
          </Typography>
        )}
      </CardContent>
    </Link>
  </Box>
);

export default ChannelCard;

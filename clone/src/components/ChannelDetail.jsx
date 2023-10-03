import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { video, ChannelCard, Videos } from "./";
import { FetchFromAPI } from "../utils/YoutubeV3API";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channeldetails, setchanneldetails] = useState(null);
  const [video, setvideo] = useState([]);
;

  useEffect(() => {
    FetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
      setchanneldetails(data?.items[0]);
    });

    FetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => {
        setvideo(data?.items);
      }
    );
  }, [id]);

  return (
    <Box sx={{ height: "95vh" }}>
      <div
        style={{
          background:
            "linear-gradient(90deg, rgba(217,105,154,1) 19%, rgba(218,146,162,1) 62%, rgba(103,164,209,1) 96%)",
          zIndex: 10,
          height: "300px",
        }}
      />
      <div
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          background: "black",
        }}
      >
        <ChannelCard channeldetail={channeldetails} marginTop="-110px" />
      </div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: { sm: "row", md: "column" },
          flexWrap: { md: "wrap" },
          overflowY: "scroll",
          background: "black",
        }}
      >
        <Videos videos={video} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;

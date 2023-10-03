import { Box, Stack } from "@mui/material";
import React from "react";
import { ChannelCard, VideoCard } from "./";

const Videos = ({ videos, videostyle }) => {
  // if (!videos?.lenght) return "Loading..";

  return (
    <Stack
      // direction={videostyle.videodetetions || "row"}
      // flexWrap={videostyle.flexwrap || "wrap"}
      // justifyContent={videostyle.justifycontent || "center"}
      direction={videostyle.videodetetions}
      flexWrap={videostyle.flexwrap}
      justifyContent={videostyle.justifycontent}
      columnGap={4}
      rowGap={2}
      sx={{
        height: "90vh",
      }}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channeldetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};
Videos.defaultProps = {
  videostyle: {
    flexwrap: "wrap",
    videodetetions: "row",
    justifycontent: "center",
  },
};

export default Videos;

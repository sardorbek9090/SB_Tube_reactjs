import { Box, Stack } from "@mui/material";
import React from "react";
import { VideoCard,ChanelCard,Loader } from "../inde";

function Videos({ videos }) {
  if(!videos.length) return <Loader/>
  return (
    <Stack
      width={"100%"}
      direction={"row"}
      flexWrap={"wrap"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={2}
    >
      {videos.map(item =>(
        <Box key={item.id.videoId}>   
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.chanelId && <ChanelCard video={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;

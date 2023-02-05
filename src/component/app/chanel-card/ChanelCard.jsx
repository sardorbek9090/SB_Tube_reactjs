import { CheckCircle } from "@mui/icons-material";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ChanelCard = ({ video }) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItem: "center",
        width: { xs: "356px", md: "320px" },
        height: "326px",
        margin: "auto",
      }}
    >
      <Link to={`/channel/${video?.id.channelId ? video?.id.channelId : video?.id }`}>
        {" "}
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItem: "center",
            textAlign: "center",
          }}
        >
          <CardMedia
            image={video?.snippet?.thumbnails?.default?.url}
            alt={video?.snippet?.title}
            sx={{
              borderRadius: "20px",
              width: { xs: "356px", md: "320px" },
              height: "326px",
              margin: "auto",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography variant={"h6"}>
            {video?.snippet?.title}{" "}
            <CheckCircle sx={{ fontSize: "14px", color: "gray", ml: "5px" }} />{" "}
          </Typography>
          {video?.statistics?.subscriberCount && (
            <Typography
              sx={{ fontSize: "15px", color: "gray", fontWeight: 500 }}
            >
              {parseInt(video?.statistics?.subscriberCount).toLocaleString(
                "en-US"
              )}{" "}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChanelCard;

import { Box, Container } from "@mui/material";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ApiServices } from "../../../services/api.services";
import { ChanelCard,Videos } from "../inde";

function Chanel() {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiServices.fetching(
          `channels?part-snippet&id=${id}`
        );
        console.log(data);
        setChannelDetail(data.items[0]);
        const dataVideo = await ApiServices.fetching(
          `search?channelId=${id}&part=snippet`
        );
        setVideos(dataVideo?.items);
      } catch (error) {}
    };
    getData();
  }, [id]);

  return (
    <Box minHeight={"95vh"} >
      <Box>
        <Box
          width={"100%"}
          height={"300px"}
          zIndex={10}
          sx={{
            background: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
            backgroundPosition:'center' ,
            backgroundSize:'cover',
            backgroundRepeat:'no-repeat'
          }}
        />
        <ChanelCard  video={channelDetail} />
      </Box>
      <Container maxWidth={'90%'} >
        <Videos videos={videos} mt={"10px"}/>
      </Container>
    </Box>
  );
}

export default Chanel;

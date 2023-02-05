import { Stack, Box, Container, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { colors } from "../../../constants/colors";
import { ApiServices } from "../../../services/api.services";
import { Category, Videos } from "../inde";
function Main() {
  const [selectedcategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  const categoryHandler = (selectedcategory) =>
    setSelectedCategory(selectedcategory);

  useEffect(() => {
    ApiServices.fetching(`search?part=snippet&q=${selectedcategory}`).then(
      (data) => setVideos(data.items)
    );
  }, [selectedcategory]);

  return (
    <Stack>
      <Category
        categoryHandler={categoryHandler}
        selectedcategory={selectedcategory}
      />
      <Box p={2} sx={{ height: "90vh" }}>
        <Container maxWidth={"90%"}>
          <Typography variant={"h4"} fontWeight={"bold"} mb={2}>
            {selectedcategory}{" "}
            <span style={{ color: colors.secondary }}>Videos</span>
          </Typography>
          <Videos videos={videos} />
        </Container>
      </Box>
    </Stack>
  );
}

export default Main;

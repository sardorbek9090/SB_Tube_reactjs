import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../../../constants";
import {colors} from "../../../constants/colors"
import {SearchBar} from '../inde'

function Navbar() {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      p={2}
      sx={{ position: "sticky", top: 0, zIndex: 999 , background: colors.primary}}
    >
      <Link to={'/'}>
      <span className="logo">{logo}</span>
      </Link>
    <SearchBar/>
      <Box />
    </Stack>
  );
}

export default Navbar;

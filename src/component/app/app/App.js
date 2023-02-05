import { Route, Routes } from "react-router-dom"; 
import {Navbar ,Main,Chanel,Search, Videodetail} from "../inde";
import "./App.css";
import { Box } from "@mui/material";


function App() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/channel/:id" element={<Chanel />} />
        <Route path="/video/:id" element={<Videodetail/>} />
        <Route path="/search/:id" element={<Search />} />
      </Routes>
    </Box>
  );
}

export default App;

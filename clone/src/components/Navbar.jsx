// import React from "react";
// import { Stack } from "@mui/material";
// import { Link } from "react-router-dom";
// import { logo } from "../utils/constans";
// import SearchBar from "./SearchBar";
// const Navbar = () => (
//   <Stack
//     direction="row"
//     p={2}
//     alignItems="center"
//     sx={{
//       position: "sticky",
//       top: 0,
//       justifyContent: "space-between",
//       background: "#000",
//     }}
//   >
//     <Link
//       to="/"
//       style={{
//         alignItems: "center",
//         display: "flex",
//         justifyContent: "space-between",
//       }}
//     >
//       <img src={logo} alt="logo" height={37} />
//     </Link>
//     <SearchBar />
//   </Stack>
// );

// export default Navbar;

import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constans";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack
    direction="row"
    // alignItems="center"
    px={2}
    py={1.6}
    sx={{
      position: "sticky",
      background: "#000",
      zIndex: 100,
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={"25px"} />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;

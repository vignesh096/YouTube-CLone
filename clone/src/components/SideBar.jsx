import React, { useState } from "react";
import { categories } from "../utils/constans";
import { Box, Stack, Typography } from "@mui/material";

const SideBar = ({ selectedCategory, setselectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "scroll",
      height: { sm: "auto", md: "95%" },
      flexDirection: { sm: "row", md: "column" },
   
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => {
          setselectedCategory(category.name);
        }}
        style={{
          background:
            category.name === selectedCategory && "FC1503" ? "red" : "",
          color: "#fff",
        }}
        key={category.name}
      >
        <span
          style={{
            color: category.name === selectedCategory ? "white" : "red",
            marginRight: "15px",
          }}
        >
          {category.icon}
        </span>
        <span
          style={{
            opacity: category.name === selectedCategory ? "1" : "0.8",
          }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default SideBar;

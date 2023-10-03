import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { FetchFromAPI } from "../utils/YoutubeV3API";

const SearchBar = () => {
  const [SearchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  return (
    <Paper
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        if (SearchTerm) {
          navigate(`/search/${SearchTerm}`);
          setSearchTerm("");
        }
      }}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        alignItems: "center",

        mr: { sm: 5 },
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={SearchTerm}
        onChange={(e) => {
          setSearchTerm(() => e.target.value);
        }}
        style={{ fontWeight: "700" }}
      />
      <IconButton
        type="submit"
        sx={{ p: "5px", color: "red" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;

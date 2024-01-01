import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Correct import
import { Box, InputBase, IconButton } from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  // Your styles here
}));

function SearchBox() {
  const classes = useStyles();
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();  // Updated to useNavigate

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/?keyword=${keyword}&page=1`);  // Updated to use navigate
  };

  return (
    <Box component="form" onSubmit={submitHandler} className={classes.root}>
      {/* Your JSX here */}
    </Box>
  );
}

export default SearchBox;

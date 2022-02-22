import React, { useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";
import { AppBar, Button } from "@material-ui/core";
import { Typography } from "@mui/material";

const NavigationBar = (props) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", py: 4 }}>
      <AppBar
        style={{
          background: "#3f51b570",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          padding: "12px",
        }}
        position="static"
      >
        <Tabs value={value} onChange={handleChange} variant="fullWidth">
          <Tab component={Link} label="Home" to="/home" />
          <Tab component={Link} label="New Question" to="/add" />
          <Tab component={Link} label="Leader Board" to="/leaderboard" />
        </Tabs>
        {props.authedUser && (
          <>
            <Box>
              <Typography>{props.authedUser}</Typography>
            </Box>
            <Button variant="contained">Logout</Button>
          </>
        )}
      </AppBar>
    </Box>
  );
};

NavigationBar.propTypes = {
  authedUser: PropTypes.string,
  onLogout: PropTypes.func,
  //book: PropTypes.object.isRequired,
  //onShelfChange: PropTypes.func.isRequired,
};

export default NavigationBar;

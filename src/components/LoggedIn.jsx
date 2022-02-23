import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AppBar, Button, Avatar, Box, Tabs, Tab } from "@material-ui/core";
import { Typography } from "@mui/material";

const LoggedIn = (props) => {
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
          <Box display="flex" flexDirection="row" alignItems="center">
            <Typography paddingRight="12px">{`Hello, ${props.authedUser.name}`}</Typography>
            <Box sx={{ marginRight: "12px" }}>
              <Avatar
                alt={props.authedUser.name}
                src={props.authedUser.avatarURL}
              />
            </Box>
            <Button onClick={props.onLogout} variant="contained">
              Logout
            </Button>
          </Box>
        )}
      </AppBar>
    </Box>
  );
};

LoggedIn.propTypes = {
  authedUser: PropTypes.object,
  onLogout: PropTypes.func,
};

export default LoggedIn;

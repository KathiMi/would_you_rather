import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";
import { AppBar, Button, Toolbar } from "@material-ui/core";

export default function NavigationBar() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", py: 4 }}>
      <AppBar position="static">
        <Toolbar>
          <Tabs sx={{ flexGrow: 1 }} value={value} onChange={handleChange}>
            <Tab component={Link} label="Home" to="/home" />
            <Tab component={Link} label="New Question" to="/add" />
            <Tab component={Link} label="Leader Board" to="/leaderboard" />
          </Tabs>
          <Button>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

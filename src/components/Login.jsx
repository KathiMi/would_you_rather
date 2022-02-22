import { connect } from "react-redux";
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Button,
  Box,
  Avatar,
} from "@mui/material";
import { useState } from "react";
import { loginUser } from "../actions/authedUser";

const Login = (props) => {
  const [userId, setUser] = useState("");
  const logInUser = (event) => {
    event.preventDefault();
    props.dispatch(loginUser(userId));
  };

  return (
    <Grid container p={4}>
      <Grid item xs={12} pb={2}>
        <Typography>Please log in</Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth>
          <InputLabel id="user-select">User</InputLabel>
          <Select
            labelId="user-select"
            value={userId}
            label="User"
            placeholder="Please log in"
            onChange={(event) => setUser(event.target.value)}
          >
            {props.users.map((user) => (
              <MenuItem key={user.id} value={user.id}>
                <Avatar
                  alt={user.name}
                  src={user.avatarURL}
                  sx={{ marginRight: "12px" }}
                />
                {user.name}
              </MenuItem>
            ))}
          </Select>
          <Box pt={2}>
            <Button
              fullWidth
              variant="contained"
              disabled={userId === ""}
              onClick={(e) => logInUser(e)}
              color="primary"
            >
              Log In
            </Button>
          </Box>
        </FormControl>
      </Grid>
    </Grid>
  );
};

function mapStateToProps({ users }) {
  return {
    users: Object.values(users),
  };
}

export default connect(mapStateToProps)(Login);

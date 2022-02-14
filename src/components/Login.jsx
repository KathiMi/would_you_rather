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
} from "@mui/material";
import { useState } from "react";
import { loginUser } from "../actions/authedUser";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  let navigate = useNavigate();
  const [user, setUser] = useState("");
  const logInUser = (event) => {
    event.preventDefault();
    props.dispatch(loginUser(user));
    navigate("/");
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
            value={user}
            label="User"
            placeholder="Please log in"
            onChange={(event) => setUser(event.target.value)}
          >
            {props.users.map((user) => (
              <MenuItem key={user} value={user}>
                {user}
              </MenuItem>
            ))}
          </Select>
          <Box pt={2}>
            <Button
              fullWidth
              variant="contained"
              disabled={user === ""}
              onClick={(e) => logInUser(e)}
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
    users: Object.keys(users),
  };
}

export default connect(mapStateToProps)(Login);

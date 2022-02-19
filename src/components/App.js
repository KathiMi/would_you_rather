import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import Login from "./Login";
import { PageNotFound } from "./PageNotFound";
import { NewQuestion } from "./NewQuestion";
import { Leaderboard } from "./Leaderboard";
import { LoggedIn } from "./LoggedIn";
import { connect } from "react-redux";
import { getUsers } from "../actions/users";
import { Typography, Box } from "@mui/material";

const App = (props) => {
  let { dispatch, authedUser } = props;
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  console.log(authedUser);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h3">Would You Rather</Typography>
      {authedUser !== null ? (
        <>
          <LoggedIn />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/add" element={<NewQuestion />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </>
      ) : (
        <Login />
      )}
    </Box>
  );
};

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(App);

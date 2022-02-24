import { useEffect } from "react";
import {
  Route,
  Routes,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import PageNotFound from "./PageNotFound";
import NewQuestion from "./NewQuestion";
import Leaderboard from "./Leaderboard";
import LoggedIn from "./LoggedIn";
import { connect } from "react-redux";
import { getUsers } from "../actions/users";
import { Typography, Box } from "@mui/material";
import { logoutUser } from "../actions/authedUser";
import { getQuestions } from "../actions/questions";
import PollDetail from "./PollDetail";

const App = (props) => {
  let navigate = useNavigate();
  let { dispatch, authedUser, users } = props;
  useEffect(() => {
    dispatch(getUsers());
    dispatch(getQuestions());
  }, [dispatch]);

  function RequireAuth({ children }) {
    const location = useLocation();
    return authedUser !== null ? (
      children
    ) : (
      <Navigate to="/login" replace state={{ path: location.pathname }} />
    );
  }

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h3">Would You Rather</Typography>
      {authedUser !== null && users !== {} && (
        <>
          <LoggedIn
            authedUser={users[authedUser]}
            onLogout={() => {
              dispatch(logoutUser());
              navigate("/login");
            }}
          />
        </>
      )}
      <Routes>
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path="questions/:questionId"
          element={
            <RequireAuth>
              <PollDetail />
            </RequireAuth>
          }
        />
        <Route
          path="/add"
          element={
            <RequireAuth>
              <NewQuestion />
            </RequireAuth>
          }
        />
        <Route
          path="/leaderboard"
          element={
            <RequireAuth>
              <Leaderboard />
            </RequireAuth>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Box>
  );
};

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users,
  };
}

export default connect(mapStateToProps)(App);

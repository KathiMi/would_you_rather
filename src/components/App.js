import { Fragment, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import Login from "./Login";
import { PageNotFound } from "./PageNotFound";
import { connect } from "react-redux";
import { getUsers } from "../actions/users";
import { Typography } from "@mui/material";

const App = (props) => {
  useEffect(() => {
    props.dispatch(getUsers());
  }, [props.authedUser, props.users, props.questions, props]);

  return (
    <BrowserRouter>
      <Fragment>
        <Typography p={4} variant="h3">
          Would You Rather
        </Typography>
      </Fragment>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default connect()(App);

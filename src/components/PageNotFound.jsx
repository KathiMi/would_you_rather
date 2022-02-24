import { Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import LoggedIn from "./LoggedIn";

const PageNotFound = (props) => {
  let navigate = useNavigate();
  return (
    <>
      {props.authedUser === null && <LoggedIn />}
      <Box width="500px" display="flex" flexDirection="column">
        <h1>404 - PAGE NOT FOUND</h1>
        {props.authedUser === null && (
          <Button onClick={() => navigate("/login")} variant="contained">
            Login
          </Button>
        )}
      </Box>
    </>
  );
};

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(PageNotFound);

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Box, Button } from "@material-ui/core";
import { Typography } from "@mui/material";
import { handleAnswerQuestion } from "../actions/questions";

const UnansweredPollDetail = (props) => {
  const choose = (option) => {
    props.dispatch(handleAnswerQuestion(props.questionId, option));
  };

  return (
    <Box
      width="1000px"
      border="solid"
      borderColor="#3f51b570"
      display="flex"
      marginBottom="40px"
      marginTop="40px"
      flexDirection="column"
    >
      <Box height="40px" padding="8px" bgcolor="#3f51b550">
        <Typography variant="h6">{props.name} asks</Typography>
      </Box>
      <Box display="flex" flexDirection="row">
        <Box flex={1} display="flex">
          <img src={props.avatarUrl} alt="profile" />
        </Box>
        <Box display="flex" flexDirection="column" flex={2}>
          <Typography
            fontWeight="800"
            padding="8px"
            paddingBottom="24px"
            variant="h5"
          >
            Would you rather...
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            padding="8px"
            paddingRight="24px"
            justifyContent="center"
          >
            <Button
              onClick={() => choose("optionOne")}
              fullWidth
              variant="contained"
              color="primary"
            >
              {props.optionOneText}
            </Button>
            <Box mt="24px" />
            <Button
              onClick={() => choose("optionTwo")}
              fullWidth
              variant="contained"
              color="primary"
            >
              {props.optionTwoText}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

UnansweredPollDetail.propTypes = {
  name: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  questionId: PropTypes.string.isRequired,
  optionOneText: PropTypes.string.isRequired,
  optionTwoText: PropTypes.string.isRequired,
};

export default connect()(UnansweredPollDetail);

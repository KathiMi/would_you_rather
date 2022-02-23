import PropTypes from "prop-types";
import { Box } from "@material-ui/core";
import { Typography, Chip } from "@mui/material";

const Option = (props) => {
  return (
    <Box
      flexDirection="column"
      display="flex"
      width="80%"
      padding="8px"
      border="solid"
      borderColor="#3f51b570"
      borderRadius="20px"
      mb="16px"
    >
      <Box flexDirection="row" display="flex">
        <Typography fontWeight="800" padding="8px" variant="h6">
          Would you rather {props.optionText}
        </Typography>
        {props.yourChoice && <Chip label="Your Choice" color="success" />}
      </Box>
      <Typography fontWeight="800" padding="8px" variant="h6">
        {props.optionVotes} out of {props.totalVotes} ={">"}{" "}
        {Math.round((props.optionVotes / props.totalVotes) * 100)}% of the users
        voted for this option
      </Typography>
    </Box>
  );
};

const AnsweredPollDetail = (props) => {
  const optionOneVotes = props.question.optionOne.votes.length;
  const optionTwoVotes = props.question.optionTwo.votes.length;

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
        <Typography variant="h6">Asked by {props.name}</Typography>
      </Box>
      <Box display="flex" flexDirection="row">
        <Box flex={1} display="flex">
          <img src={props.avatarUrl} alt="profile" />
        </Box>
        <Box display="flex" flexDirection="column" flex={2}>
          <Typography fontWeight="800" padding="8px" variant="h5">
            Results:
          </Typography>
          <Option
            optionText={props.question.optionOne.text}
            yourChoice={props.yourChoice === "optionOne"}
            optionVotes={optionOneVotes}
            totalVotes={optionOneVotes + optionTwoVotes}
          />

          <Option
            optionText={props.question.optionTwo.text}
            yourChoice={props.yourChoice === "optionTwo"}
            optionVotes={optionTwoVotes}
            totalVotes={optionOneVotes + optionTwoVotes}
          />
        </Box>
      </Box>
    </Box>
  );
};

AnsweredPollDetail.propTypes = {
  question: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  yourChoice: PropTypes.string.isRequired,
};

export default AnsweredPollDetail;

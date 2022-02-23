import PropTypes from "prop-types";
import { Box } from "@material-ui/core";
import { Typography, Chip } from "@mui/material";

const UnansweredPollDetail = (props) => {
  console.log(props.questionId);
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
          <img src="https://picsum.photos/id/237/200/300" alt="profile" />
        </Box>
        <Box display="flex" flexDirection="column" flex={2}>
          <Typography fontWeight="800" padding="8px" variant="h5">
            Results:
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default UnansweredPollDetail;

import PropTypes from "prop-types";
import { Box } from "@material-ui/core";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PollOverviewTile = (props) => {
  let navigate = useNavigate();
  return (
    <Box
      border="solid"
      borderColor="#3f51b570"
      display="flex"
      marginBottom="40px"
      flexDirection="column"
    >
      <Box height="40px" padding="8px" bgcolor="#3f51b550">
        <Typography variant="h6">{props.name} wants to know:</Typography>
      </Box>
      <Box display="flex" flexDirection="column" padding="4px">
        <Typography fontWeight="800" padding="8px" variant="h6">
          Would you rather...
        </Typography>
        <Typography
          paddingY="16px"
          variant="h5"
        >{`...${props.optionOne}...`}</Typography>
        <Box sx={{ margin: "24px" }}>
          <Button
            onClick={() => navigate(`/questions/${props.questionId}`)}
            fullWidth
            variant="contained"
            color="info"
          >
            View Poll
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

PollOverviewTile.propTypes = {
  name: PropTypes.string.isRequired,
  questionId: PropTypes.string.isRequired,
  optionOne: PropTypes.string.isRequired,
};

export default PollOverviewTile;

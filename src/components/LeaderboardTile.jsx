import PropTypes from "prop-types";
import { Box } from "@material-ui/core";
import { Typography, Avatar } from "@mui/material";

const LeaderboardTile = (props) => {
  return (
    <Box
      width="1000px"
      border="solid"
      borderColor="#3f51b570"
      display="flex"
      marginY="16px"
      borderRadius="20px"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flex={1}
        padding="24px"
      >
        <Typography variant="h1">{props.place}</Typography>
      </Box>
      <Box
        padding="24px"
        display="flex"
        flexDirection="column"
        alignItems="cemter"
        flex={3}
        borderLeft="solid"
        borderColor="#3f51b570"
      >
        <Box display="flex">
          <Avatar
            alt={props.userName}
            src={props.avatarUrl}
            sx={{ marginRight: "12px" }}
          />
          <Typography fontWeight="800" variant="h4">
            {props.userName}
          </Typography>
        </Box>
        <Typography
          paddingTop="32px"
          variant="h4"
        >{`Answered Questions: ${props.answeredQuestions}`}</Typography>
        <Typography
          paddingTop="8px"
          variant="h4"
        >{`Created Questions: ${props.createdQuestions}`}</Typography>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        padding="24px"
        borderLeft="solid"
        borderColor="#3f51b570"
        flex={1}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="h5"> Score </Typography>
          <Typography variant="h3"> {props.score} </Typography>
        </Box>
      </Box>
    </Box>
  );
};

LeaderboardTile.propTypes = {
  userName: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  answeredQuestions: PropTypes.number.isRequired,
  createdQuestions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  place: PropTypes.string.isRequired,
};

export default LeaderboardTile;

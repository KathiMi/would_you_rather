import { Box, ToggleButtonGroup, ToggleButton } from "@mui/material";
import { useState } from "react";
import { connect } from "react-redux";
import PollOverviewTile from "./PollOverviewTile";

const pollOverview = (questions, users) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      padding="24px"
    >
      {questions.map((q) => (
        <PollOverviewTile
          key={q.id}
          name={users[q.author].name}
          questionId={q.id}
          optionOne={q.optionOne.text}
        />
      ))}
    </Box>
  );
};

const Home = (props) => {
  let { users, answeredQuestions, unansweredQuestions } = props;

  const [homeTab, setHomeTab] = useState("unanswered");

  const handleChange = (event, newValue) => {
    if (newValue === null) return;
    setHomeTab(newValue);
  };

  answeredQuestions.sort((a, b) => {
    return b.timestamp - a.timestamp;
  });
  unansweredQuestions.sort((a, b) => {
    return b.timestamp - a.timestamp;
  });
  return (
    <Box width="800px" border="solid" borderColor="lightgray" marginTop="32px">
      <Box bgcolor="lightgray" height="60px" display="flex" marginBottom="16px">
        <ToggleButtonGroup
          color="primary"
          value={homeTab}
          exclusive
          onChange={handleChange}
          fullWidth
        >
          <ToggleButton
            sx={{ fontWeight: "800", fontSize: "24px" }}
            value="unanswered"
          >
            Unanswered Questions
          </ToggleButton>
          <ToggleButton
            sx={{ fontWeight: "800", fontSize: "24px" }}
            value="answered"
          >
            Answered Questions
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      {homeTab === "unanswered" && pollOverview(unansweredQuestions, users)}
      {homeTab === "answered" && pollOverview(answeredQuestions, users)}
    </Box>
  );
};

function mapStateToProps({ authedUser, users, questions }) {
  const answeredQuestionIds = Object.keys(users[authedUser].answers);
  let answeredQuestions = [];
  let unansweredQuestions = [];
  Object.keys(questions).forEach((questionId) => {
    answeredQuestionIds.includes(questionId)
      ? answeredQuestions.push(questions[questionId])
      : unansweredQuestions.push(questions[questionId]);
  });
  return {
    users,
    answeredQuestions,
    unansweredQuestions,
  };
}

export default connect(mapStateToProps)(Home);

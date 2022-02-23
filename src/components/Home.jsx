import { Box, ToggleButtonGroup, ToggleButton } from "@mui/material";
import { useState } from "react";
import { connect } from "react-redux";

const Home = (props) => {
  let { authedUser, users, questions, answeredQuestions, unansweredQuestions } =
    props;

  const [homeTab, setHomeTab] = useState("unanswered");

  const handleChange = (event, newValue) => {
    setHomeTab(newValue);
  };
  console.log(answeredQuestions);
  console.log(unansweredQuestions);
  return (
    <Box width="1000px" border="solid" borderColor="lightgray">
      <Box bgcolor="lightgray" height="40px" display="flex">
        <ToggleButtonGroup
          color="primary"
          value={homeTab}
          exclusive
          onChange={handleChange}
          fullWidth
        >
          <ToggleButton value="unanswered">Unanswered Questions</ToggleButton>
          <ToggleButton value="answered">Answered Questions</ToggleButton>
        </ToggleButtonGroup>
      </Box>
      {homeTab === "unanswered" && (
        <Box display="flex" justifyContent="center">
          <ul>
            {unansweredQuestions.map((q) => (
              <li key={q.id}>{q.id}</li>
            ))}
          </ul>
        </Box>
      )}
      {homeTab === "answered" && (
        <Box display="flex" justifyContent="center">
          <ul>
            {answeredQuestions.map((q) => (
              <li key={q.id}>{q.id}</li>
            ))}
          </ul>
        </Box>
      )}
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
    authedUser,
    users,
    questions,
    answeredQuestions,
    unansweredQuestions,
  };
}

export default connect(mapStateToProps)(Home);

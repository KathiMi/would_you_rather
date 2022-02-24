import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import AnsweredPollDetail from "./AnsweredPollDetail";
import UnansweredPollDetail from "./UnansweredPollDetail";

const PollDetail = (props) => {
  const { authedUser, users, questions } = props;
  const questionId = useParams().questionId;
  const answeredQuestionIds = Object.keys(users[authedUser].answers);
  const user = users[questions[questionId].author];

  if (answeredQuestionIds.includes(questionId)) {
    return (
      <AnsweredPollDetail
        question={questions[questionId]}
        name={user.name}
        avatarUrl={user.avatarURL}
        yourChoice={users[authedUser].answers[questionId]}
        questionId={questionId}
      />
    );
  } else {
    return (
      <UnansweredPollDetail
        name={user.name}
        avatarUrl={user.avatarURL}
        questionId={questionId}
        optionOneText={questions[questionId].optionOne.text}
        optionTwoText={questions[questionId].optionTwo.text}
      />
    );
  }
};

function mapStateToProps({ authedUser, users, questions }) {
  return {
    authedUser,
    users,
    questions,
  };
}

export default connect(mapStateToProps)(PollDetail);

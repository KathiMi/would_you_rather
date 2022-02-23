import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import AnsweredPollDetail from "./AnsweredPollDetail";
import UnansweredPollDetail from "./UnansweredPollDetail";

const PollDetail = (props) => {
  const { authedUser, users, questions } = props;
  const questionId = useParams().questionId;
  const answeredQuestionIds = Object.keys(users[authedUser].answers);

  if (answeredQuestionIds.includes(questionId)) {
    const user = users[questions[questionId].author];
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
    return <UnansweredPollDetail questionId={questionId} />;
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

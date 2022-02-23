import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import AnsweredPollDetail from "./AnsweredPollDetail";
import UnansweredPollDetail from "./UnansweredPollDetail";

const PollDetail = (props) => {
  const questionId = useParams().questionId;
  const answeredQuestionIds = Object.keys(
    props.users[props.authedUser].answers
  );

  if (answeredQuestionIds.includes(questionId)) {
    return <AnsweredPollDetail questionId={questionId} />;
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

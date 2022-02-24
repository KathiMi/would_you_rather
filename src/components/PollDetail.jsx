import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import AnsweredPollDetail from "./AnsweredPollDetail";
import UnansweredPollDetail from "./UnansweredPollDetail";
import PageNotFound from "./PageNotFound";

const PollDetail = (props) => {
  const { authedUser, users, questions } = props;
  const questionId = useParams().questionId;
  const answeredQuestionIds = Object.keys(users[authedUser].answers);
  const questionIds = Object.keys(questions);

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
  } else if (questionIds.includes(questionId)) {
    const user = users[questions[questionId].author];
    return (
      <UnansweredPollDetail
        name={user.name}
        avatarUrl={user.avatarURL}
        questionId={questionId}
        optionOneText={questions[questionId].optionOne.text}
        optionTwoText={questions[questionId].optionTwo.text}
      />
    );
  } else {
    return <PageNotFound />;
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

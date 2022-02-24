import { connect } from "react-redux";
import LeaderboardTile from "./LeaderboardTile";

const Leaderboard = (props) => {
  const preparedUserData = props.users
    .map((user) => ({
      answeredQuestions: Object.values(user.answers).length,
      createdQuestions: user.questions.length,
      userName: user.name,
      avatarUrl: user.avatarURL,
      score: Object.values(user.answers).length + user.questions.length,
    }))
    .sort((a, b) => {
      return b.score - a.score;
    });

  return preparedUserData.map((user, index) => (
    <LeaderboardTile
      key={`${user.userName}_${index}`}
      place={`${index + 1}.`}
      userName={user.userName}
      avatarUrl={user.avatarUrl}
      answeredQuestions={user.answeredQuestions}
      createdQuestions={user.createdQuestions}
      score={user.score}
    />
  ));
};

function mapStateToProps({ users }) {
  return {
    users: Object.values(users),
  };
}

export default connect(mapStateToProps)(Leaderboard);

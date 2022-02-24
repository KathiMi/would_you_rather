import {
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from "../utils/_DATA";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ANSWER_QUESTION = "ANSWER_QUESTION";

function answerQuestion(authedUser, qid, answer) {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    qid,
    answer,
  };
}

export const handleAnswerQuestion = (qid, answer) => {
  return async (dispatch, getState) => {
    const { authedUser } = getState();
    return _saveQuestionAnswer({
      authedUser,
      qid,
      answer,
    }).then(({ authedUser, qid, answer }) => {
      return dispatch(answerQuestion(authedUser, qid, answer));
    });
  };
};

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export const handleAddQuestion = (optionOneText, optionTwoText) => {
  return async (dispatch, getState) => {
    const { authedUser } = getState();
    return _saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    }).then((question) => dispatch(addQuestion(question)));
  };
};

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export const getQuestions = () => {
  return async (dispatch) => {
    const questions = await _getQuestions();
    dispatch(receiveQuestions(questions));
  };
};

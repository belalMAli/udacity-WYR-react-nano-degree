import { _getQuestions, _saveQuestionAnswer } from "../../_DATA"

export const ALL_QUESTIONS = "ALL_QUESTIONS"
export const SAVE_QUESTION_TO_QUESTIONS_STATE = "SAVE_QUESTION_TO_QUESTIONS_STATE"

export const questionsToState = questions => ({
  type: ALL_QUESTIONS,
  questions
})

export const saveQuestionToQuestionsState = questionData => ({
  type: SAVE_QUESTION_TO_QUESTIONS_STATE,
  questionData
})
// export const saveQuestionToUsersState = questionData => ({
//   type: SAVE_QUESTION_TO_USERS_STATE,
//   questionData
// })


export const getQuestions = () => async dispatch => {
  const questions = await _getQuestions()
  dispatch(questionsToState(questions))
}

export const saveQuestionAnswer = (authedUser, qid, answer) => async dispatch => {
  dispatch(saveQuestionToQuestionsState({authedUser, qid, answer}))
  // dispatch(saveQuestionToUsersState({authedUser, qid, answer}))
  await _saveQuestionAnswer({authedUser, qid, answer})
}

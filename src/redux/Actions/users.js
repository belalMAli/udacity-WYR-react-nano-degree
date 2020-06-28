import { _getUsers } from "../../_DATA"

export const ALL_USERS = "ALL_USERS"
export const SAVE_QUESTION_TO_USERS_STATE = "SAVE_QUESTION_TO_USERS_STATE"

export const usersToState = users => ({
  type: ALL_USERS,
  users: users
})


export const getAllUsers = () => async dispatch => {
  const users = await _getUsers()
  dispatch(usersToState(users))
}

export const saveQuestionToUsersState = questionData => ({
  type: SAVE_QUESTION_TO_USERS_STATE,
  questionData
})

export const saveQuestionAnswerToUser = (authedUser, qid, answer) => dispatch => {
  dispatch(saveQuestionToUsersState({authedUser, qid, answer}))
}

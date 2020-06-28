import { ALL_USERS } from "../Actions/users"
import { SAVE_QUESTION_TO_USERS_STATE } from "../Actions/users"

const users = (state = null, action) => {
  switch (action.type) {
    case ALL_USERS:
      return action.users
    case SAVE_QUESTION_TO_USERS_STATE: {
      const { authedUser, qid, answer } = action.questionData
      const question = state[qid]
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer
          }
        }
      }
    }
    default:
      return state
  }
}

export default users

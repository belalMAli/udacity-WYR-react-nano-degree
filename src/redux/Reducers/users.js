import { ALL_USERS } from "../Actions/users"
import { SAVE_QUESTION_TO_USERS_STATE, ADD_QUESTION_TO_AUTHOR } from "../Actions/users"

const users = (state = null, action) => {
  switch (action.type) {
    case ALL_USERS:
      return action.users
    case ADD_QUESTION_TO_AUTHOR: {
      const author = action.createdQuestion.author
      return {
        ...state,
        [author]: {
          ...state[author],
          questions: [...state[author].questions, action.createdQuestion.id]
        }
      }
    }
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

import { ALL_QUESTIONS, SAVE_QUESTION_TO_QUESTIONS_STATE } from "../Actions/questions"

const questions = (state = {}, action) => {
  switch (action.type) {
    case ALL_QUESTIONS:
      return action.questions
    case SAVE_QUESTION_TO_QUESTIONS_STATE: {
      const { authedUser, qid, answer } = action.questionData
      const question = state[qid]
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authedUser])
          }
        }
      }
    }
    default:
      return state
  }
}

export default questions

import { _getQuestions, _saveQuestionAnswer, _saveQuestion } from "../../_DATA"
import {addCreatedQuestionToAuthor} from "./users"

export const ALL_QUESTIONS = "ALL_QUESTIONS"
export const ADD_QUESTION = "ADD_QUESTION"
export const SAVE_QUESTION_TO_QUESTIONS_STATE = "SAVE_QUESTION_TO_QUESTIONS_STATE"

export const questionsToState = questions => ({
  type: ALL_QUESTIONS,
  questions
})

export const addQuestionToState = question => ({
  type: ADD_QUESTION,
  question
})

export const saveQuestionToQuestionsState = questionData => ({
  type: SAVE_QUESTION_TO_QUESTIONS_STATE,
  questionData
})

export const getQuestions = () => async dispatch => {
  const questions = await _getQuestions()
  dispatch(questionsToState(questions))
}

export const addQuestion = (question) => async dispatch => {
  const formattedQuestion = await _saveQuestion(question)
  dispatch(addQuestionToState(formattedQuestion))
  dispatch(addCreatedQuestionToAuthor(formattedQuestion))
  
}

export const saveQuestionAnswer = (authedUser, qid, answer) => async dispatch => {
  dispatch(saveQuestionToQuestionsState({authedUser, qid, answer}))
  await _saveQuestionAnswer({authedUser, qid, answer})
}


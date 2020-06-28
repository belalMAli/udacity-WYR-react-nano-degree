import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { saveQuestionAnswer } from '../redux/Actions/questions'
import { saveQuestionAnswerToUser } from '../redux/Actions/users'
import QuestionResults from './QuestionResults'

class QuestionPage extends Component {
  state = {
    selected: null
  }

  clickOption = (event) => {
    this.setState({
      selected: event.target.value
    })
  }
  submit = (event) => {
    event.preventDefault()
    // To post data to API and change the questions state inside the store
    this.props.saveQuestionAnswer(this.props.authedUser, this.props.match.params.id, this.state.selected)
    // To change the users state inside the store
    this.props.saveQuestionAnswerToUser(this.props.authedUser, this.props.match.params.id, this.state.selected)
  }

  render() {
    const { questions, users, authedUser } = this.props
    const { id } = this.props.match.params
    const question = questions[id]
    const author = users[question.author].name
    const answeredQuestionsIDs = Object.keys(users[authedUser].answers)
    if (answeredQuestionsIDs.includes(id)) {
      return (
        <QuestionResults id={id}></QuestionResults>
      )
    }
    return (
      <div>
        <div className="person">
          <p>{author} asks:</p>
        </div>
        <div>
          <div className="imgSection">
            <img></img>
          </div>
          <div className="questionSection">
            <h3>would you rather...</h3>
            <form onSubmit={this.submit}>
              <input type="radio" id="optionOne" name="would you rather" onChange={this.clickOption} value="optionOne"></input>
              <label htmlFor="optionOne">{question.optionOne.text}</label>
              <input type="radio" id="optionTwo" name="would you rather" onChange={this.clickOption} value="optionTwo"></input>
              <label htmlFor="optionTwo">{question.optionTwo.text}</label>
              <button>submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = ({ questions, users, authedUser }) => ({
  questions,
  users,
  authedUser
})

export default connect(mapStateToProps, {
  saveQuestionAnswer,
  saveQuestionAnswerToUser
})(QuestionPage)
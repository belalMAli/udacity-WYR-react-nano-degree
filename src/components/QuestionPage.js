import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveQuestionAnswer } from '../redux/Actions/questions'
import { saveQuestionAnswerToUser } from '../redux/Actions/users'
import QuestionResults from './QuestionResults'
import { Button, Card } from 'react-bootstrap';

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
    if (this.state.selected) {
      event.preventDefault()
      // To post data to API and change the questions state inside the store
      this.props.saveQuestionAnswer(this.props.authedUser, this.props.match.params.id, this.state.selected)
      // To change the users state inside the store
      this.props.saveQuestionAnswerToUser(this.props.authedUser, this.props.match.params.id, this.state.selected)
    }
  }

  render() {
    const { questions, users, authedUser } = this.props
    const { id } = this.props.match.params
    const question = questions[id]
    const author = users[question.author].name
    const authorAvatar = users[question.author].avatarURL
    const answeredQuestionsIDs = Object.keys(users[authedUser].answers)
    if (answeredQuestionsIDs.includes(id)) {
      return (
        <div className="container">
          <QuestionResults avatar={authorAvatar} id={id}></QuestionResults>
        </div>
      )
    }
    return (
      <div className="container">
        <Card className="questionCard">
          <Card.Title className="text-left">{author} asks:</Card.Title>
          <div className="container-fluid">
            <div className="row">
              <Card.Img className="col-md-3" src={authorAvatar} />
              <Card.Body className="col-md-9">
                <h3>would you rather...</h3>
                  <form onSubmit={this.submit}>
                    <div>
                      <input type="radio" id="optionOne" name="would you rather" onChange={this.clickOption} value="optionOne"></input>
                      <label htmlFor="optionOne">{question.optionOne.text}</label>
                    </div>
                    <div>
                      <input type="radio" id="optionTwo" name="would you rather" onChange={this.clickOption} value="optionTwo"></input>
                      <label htmlFor="optionTwo">{question.optionTwo.text}</label>
                    </div>
                    <Button disabled={!this.state.selected} type="submit" className="w-100" variant="outline-success">
                      submit
                  </Button>
                  </form>
              </Card.Body>
            </div>
          </div>
        </Card>
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
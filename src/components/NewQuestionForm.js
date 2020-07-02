import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { addQuestion } from '../redux/Actions/questions'
import { Form, Button } from 'react-bootstrap';

class NewQuestionForm extends Component {
  state = {
    optionOne: '',
    optionTwo: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.optionOne && this.state.optionTwo) {
      this.props.addQuestion({
        author: this.props.authedUser,
        optionOneText: this.state.optionOne,
        optionTwoText: this.state.optionTwo
      })
      this.props.history.push('/')
    }
  }

  render() {
    return (

      <div className="container">
        <h2 className="text-center">create new question</h2>
        <hr />
        <h4 className="mb-4">would you rather...</h4>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Control
              name='optionOne'
              onChange={this.handleChange}
              value={this.state.optionOne}
              placeholder="first option"
              />
          </Form.Group>
          <h3 className="text-center mb-4">or</h3>
          <Form.Group>
            <Form.Control
              name='optionTwo'
              onChange={this.handleChange}
              value={this.state.optionTwo}
              placeholder="second option"
              />
          </Form.Group>
          <Button 
            disabled={!this.state.optionOne && !this.state.optionTwo}
            variant="primary" 
            type="submit">
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = ({ authedUser }) => ({
  authedUser
})

export default withRouter(
  connect(mapStateToProps, { addQuestion })(NewQuestionForm)
)
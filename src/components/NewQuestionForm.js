import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { addQuestion } from '../redux/Actions/questions'

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

      <div>
        <h2>create new fquestion</h2>
        <hr />
        <h4>would you rather...</h4>
        <form onSubmit={this.handleSubmit}>
          <input name='optionOne'
                      onChange={this.handleChange}
                      value={this.state.optionOne} placeholder="first option"></input>
          <p>or</p>
          <input name='optionTwo'
                      onChange={this.handleChange}
                      value={this.state.optionTwo} placeholder="second option"></input>
          <button 
            disabled={!this.state.optionOne && !this.state.optionTwo} 
            type="submit">
              submit
          </button>
        </form>
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
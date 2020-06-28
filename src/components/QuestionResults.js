import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { saveQuestionAnswer } from '../redux/Actions/questions'

class QuestionResults extends Component {
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
        this.props.saveQuestionAnswer(this.props.authedUser, this.props.match.params.id, this.state.selected)
    }

    render() {
        const { questions, users, authedUser } = this.props
        const { id } = this.props
        const question = questions[id]
        const author = users[question.author].name
        const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length
        const optOneVotes = question.optionOne.votes.length 
        const optTwoVotes = totalVotes -  optOneVotes
        const opt1 = ((optOneVotes / totalVotes) * 100).toFixed(1)
        const opt2 = 100 - opt1
        const userAnswer = users[authedUser].answers[id]
        return (
            <div>
                <div className="person">
                    <p>Asked by {author}</p>
                </div>
                <div>
                    <div className="imgSection">
                        <img></img>
                    </div>
                    <div className="questionSection">
                        <h3>Results</h3>
                        <div className="progressbarContainer">
                            {userAnswer === 'optionOne' && <span> your vote </span>}
                            <h3>
                                {question.optionOne.text}
                            </h3>
                            <div className="progressbar" style={{width: `${opt1}%`}}>{opt1}%</div>
                            <p>
                                {optOneVotes} out of {totalVotes} votes
                            </p>
                        </div>
                        <div className="progressbarContainer">
                            {userAnswer === 'optionTwo' && <span> your vote </span>}
                            <h3>
                                {question.optionTwo.text}
                            </h3>
                            <div className="progressbar" style={{width: `${opt2}%`}}>{opt2}%</div>
                            <p>
                                {optTwoVotes} out of {totalVotes} votes
                            </p>
                        </div>
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
    saveQuestionAnswer
})(QuestionResults)
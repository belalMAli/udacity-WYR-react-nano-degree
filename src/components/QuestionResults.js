import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveQuestionAnswer } from '../redux/Actions/questions'
import { ProgressBar, Card } from 'react-bootstrap';

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
        const optTwoVotes = totalVotes - optOneVotes
        const opt1 = ((optOneVotes / totalVotes) * 100).toFixed(1)
        const opt2 = 100 - opt1
        const userAnswer = users[authedUser].answers[id]
        return (
            <Card className="questionCard resultCard">
                <div className="container-fluid">
                    <Card.Title>Asked By: {author}</Card.Title>
                    <div className="row">
                        <Card.Img className="col-md-3" src={this.props.avatar} />
                        <Card.Body className="col-md-9">
                            <h3>Results:</h3>
                                <div className={`progressbarContainer ${userAnswer === 'optionOne' ? 'userVote' : null}`}>
                                    {userAnswer === 'optionOne' && <span className="vote-badge">your vote</span>}
                                    <h3>
                                        {question.optionOne.text}
                                    </h3>
                                    <ProgressBar striped variant="success" now={opt1} label={`${opt1}%`} />
                                    <p>
                                        {optOneVotes} out of {totalVotes} votes
                            </p>
                                </div>
                                <div className={`progressbarContainer ${userAnswer === 'optionTwo' ? 'userVote' : null}`}>
                                    {userAnswer === 'optionTwo' && <span className="vote-badge">your vote</span>}
                                    <h3>
                                        {question.optionTwo.text}
                                    </h3>
                                    <ProgressBar striped variant="success" now={opt2} label={`${opt2}%`} />
                                    <p>
                                        {optTwoVotes} out of {totalVotes} votes
                            </p>
                                </div>
                        </Card.Body>
                    </div>
                </div>
            </Card>
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
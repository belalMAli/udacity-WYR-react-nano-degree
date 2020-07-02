import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { getQuestions } from '../redux/Actions/questions'
import QuestionCard from './QuestionCard'
import { Button } from 'react-bootstrap';

class AllQuestions extends Component {
    state = {
        showAnsweredQuestions: false
    }

    showAnsweredQuestions = () => {
        this.setState({
            showAnsweredQuestions: true
        })
    }
    showUnansweredQuestions = () => {
        this.setState({
            showAnsweredQuestions: false
        })
    }

    // componentDidMount() {
    //     this.props.getQuestions()
    // }

    onLogin = (e) => {
        this.props.login(e.target.value)
    }
    render() {
        const { questions, users, authedUser } = this.props
        let answeredQuestionsIDs = []
        let answeredQuestions = []
        let unAnsweredQuestionsIDs = []
        let unAnsweredQuestions = []
        if (questions) {
            answeredQuestionsIDs = Object.keys(users[authedUser].answers)
            answeredQuestions = answeredQuestionsIDs.map(id => questions[id])
                                .sort((a, b) => b.timestamp - a.timestamp)
            for (let i = 0; i < Object.keys(questions).length; i++) {
                if (!answeredQuestionsIDs.includes(Object.keys(questions)[i])) {
                    unAnsweredQuestionsIDs.push(Object.keys(questions)[i])
                }
            }
            unAnsweredQuestions = unAnsweredQuestionsIDs.map(id => questions[id])
                                  .sort((a, b) => b.timestamp - a.timestamp)
        }
        return (
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <Button className="w-100" onClick={this.showUnansweredQuestions} 
                        variant={this.state.showAnsweredQuestions === false ? 'success' : 'outline-success'}>
                            Unanswered Questions</Button>
                    </div>
                    <div className="col-md-6 mb-3">
                        <Button className="w-100" onClick={this.showAnsweredQuestions} 
                        variant={this.state.showAnsweredQuestions === true ? 'success' : 'outline-success'}>
                            Answered Questions</Button>
                    </div>
                </div>
                {this.state.showAnsweredQuestions === false && <>
                    {unAnsweredQuestions.map(singleQuestion => <QuestionCard
                                                                    author={users[singleQuestion.author].name}
                                                                    avatar={users[singleQuestion.author].avatarURL}
                                                                    hint={singleQuestion.optionOne.text}
                                                                    id={singleQuestion.id}
                                                                    key={singleQuestion.id}>
                                                                </QuestionCard>)}
                </>}
                {this.state.showAnsweredQuestions === true && <>
                    {answeredQuestions.map(singleQuestion => <QuestionCard 
                                                                author={users[singleQuestion.author].name}
                                                                avatar={users[singleQuestion.author].avatarURL}
                                                                hint={singleQuestion.optionOne.text}
                                                                id={singleQuestion.id} 
                                                                key={singleQuestion.id}>
                                                                </QuestionCard>)}
                </>}
            </div>
        )
    }
}

const mapStateToProps = ({ questions, users, authedUser }) => ({
    questions,
    users,
    authedUser
})

export default connect(mapStateToProps, null)(AllQuestions)

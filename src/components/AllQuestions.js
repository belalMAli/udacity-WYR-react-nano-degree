import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { getQuestions } from '../redux/Actions/questions'
import QuestionCard from './QuestionCard'

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

    componentDidMount() {
        this.props.getQuestions()
    }

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
            // .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
            answeredQuestions = answeredQuestionsIDs.map(id => questions[id])
            for (let i = 0; i < Object.keys(questions).length; i++) {
                if (!answeredQuestionsIDs.includes(Object.keys(questions)[i])) {
                    unAnsweredQuestionsIDs.push(Object.keys(questions)[i])
                }
            }
            // unAnsweredQuestionsIDs.sort((a, b) => questions[b].timestamp - questions[a].timestamp)
            unAnsweredQuestions = unAnsweredQuestionsIDs.map(id => questions[id])
        }
        return (
            <Fragment>
                <button onClick={this.showUnansweredQuestions}>Unanswered Questions</button>
                <button onClick={this.showAnsweredQuestions}>Answered Questions</button>
                {this.state.showAnsweredQuestions === false && <>
                    {unAnsweredQuestions.map(singleQuestion => <QuestionCard
                                                                    author={users[singleQuestion.author].name}
                                                                    hint={singleQuestion.optionOne.text}
                                                                    id={singleQuestion.id}
                                                                    key={singleQuestion.id}>
                                                                </QuestionCard>)}
                </>}
                {this.state.showAnsweredQuestions === true && <>
                    {answeredQuestions.map(singleQuestion => <QuestionCard 
                                                                author={users[singleQuestion.author].name}
                                                                hint={singleQuestion.optionOne.text}
                                                                id={singleQuestion.id} 
                                                                key={singleQuestion.id}>
                                                                </QuestionCard>)}
                </>}
            </Fragment>
        )
    }
}

const mapStateToProps = ({ questions, users, authedUser }) => ({
    questions,
    users,
    authedUser
})

export default connect(mapStateToProps, {
    getQuestions,
}
)(AllQuestions)

import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import UserCard from './UserCard'

class LeaderBoard extends Component {
    render() {
        let { questions, users, authedUser } = this.props
        const usersListing = Object.keys(users)
        .map(userID => {
            const user = users[userID]
            const answered = Object.keys(user.answers).length 
            const created  = user.questions.length
            const score = answered + created
            users[userID].score = score
            // console.log(users)
            return userID
        })
        .sort((a,b) => users[b].score - users[a].score)
        .map(userID => {
                const user = users[userID]
                const answered = Object.keys(user.answers).length 
                const created  = user.questions.length
                // const score = answered + created
                return (<UserCard
                    key={userID}
                    name={user.name}
                    avatarURL={user.avatarURL}
                    answered={answered}
                    created={created}
                    score={user.score}
                >
                </UserCard>)
            }
        )

        return (
            <div>
                {console.log(usersListing)}
                {usersListing}
            </div>
        )
    }
}


const mapStateToProps = ({ questions, users, authedUser }) => ({
    questions,
    users,
    authedUser
})

export default connect(mapStateToProps, null)(LeaderBoard)
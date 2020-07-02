import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserCard from './UserCard'

class LeaderBoard extends Component {
    render() {
        let { users } = this.props
        const usersListing = Object.keys(users)
        .map(userID => {
            const user = users[userID]
            const answered = Object.keys(user.answers).length 
            const created  = user.questions.length
            const score = answered + created
            users[userID].score = score
            return userID
        })
        .sort((a,b) => users[b].score - users[a].score)
        .map((userID, i) => {
                const user = users[userID]
                const answered = Object.keys(user.answers).length 
                const created  = user.questions.length
                return (<UserCard
                    key={userID}
                    place={i}
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
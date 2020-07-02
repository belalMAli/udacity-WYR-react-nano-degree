import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllUsers } from '../redux/Actions/users'
import { getQuestions } from '../redux/Actions/questions'
import { login } from '../redux/Actions/authentication'

class Login extends Component {
    componentDidMount() {
        this.props.getAllUsers()
        this.props.getQuestions()
    }

    login = (e) => {
        this.props.login(e.target.value)
        const path = this.props.location.state.from.pathname || '/'
        this.props.history.push(path)
    }
    render() {
        const { users } = this.props
        return (
            <div className="container text-center">
                <h1>Welcome to would you rather</h1>
                <h4>sgnin to continue</h4>
                <form>
                    <select defaultValue="" onChange={(e) => this.login(e)}>
                        <option value="" disabled>Select user</option>
                        {this.props.users && Object.keys(users).map(userID => <option key={userID} value={userID}>{users[userID].name}</option>)}
                    </select>
                </form>
            </div>
        )
    }
}

const mapStateToProps = ({ users }) => ({
    users
})

export default connect(mapStateToProps, {
    getAllUsers,
    getQuestions,
    login,
}
)(Login)

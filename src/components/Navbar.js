import React, { Component } from 'react'
import { NavLink, Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../redux/Actions/authentication'


class Navbar extends Component {
    render() {
        const { users, authedUser } = this.props
        return (

            <nav id="navbar">
                <NavLink to='/'>
                    Home
                </NavLink>
                <NavLink to='/newquestion'>
                    Newquestion
                </NavLink>
                <NavLink to='/leaderboard'>
                    Leaderboard
                </NavLink>
                {authedUser && (
                    <>
                    <p>
                        <span>
                            Hello, {users[authedUser].name}
                        </span>
                        <img></img>
                    </p>
                    <button
                        onClick={() => {
                            this.props.logout()
                            // history.push('/')
                        }}
                    >
                        Logout
                    </button>
                    </>
                )}
            </nav>
        )
    }
}


// export default Navbar;

const mapStateToProps = ({ authedUser, users }) => ({
    users,
    authedUser
})

export default withRouter(
    connect(mapStateToProps, {
        logout
    })(Navbar)
)




import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../redux/Actions/authentication'
import { Button, Form, Nav, Navbar } from 'react-bootstrap';

class AppNav extends Component {
    render() {
        const { users, authedUser } = this.props
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand>
                    <NavLink to='/'>
                        W.Y.R
                </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav>
                            <NavLink to='/'>
                                Home
                            </NavLink>
                        </Nav>
                        <Nav>
                            <NavLink to='/add'>
                                Newquestion
                            </NavLink>
                        </Nav>
                        <Nav>
                            <NavLink to='/leaderboard'>
                                Leaderboard
                            </NavLink>
                        </Nav>
                        {authedUser && (
                            <Nav>
                                <span>
                                    Hello, {users[authedUser].name}
                                </span>
                                <img className="nav-img" src={users[authedUser].avatarURL} alt={users[authedUser].name}></img>
                            </Nav>
                        )}
                    </Nav>
                    {authedUser && (
                        <Form inline>
                            <Button onClick={this.props.logout} variant="outline-danger">Logout</Button>
                        </Form>
                    )}
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

const mapStateToProps = ({ authedUser, users }) => ({
    users,
    authedUser
})

export default withRouter(
    connect(mapStateToProps, {
        logout
    })(AppNav)
)




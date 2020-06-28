import React, { Component, Fragment } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { connect } from "react-redux"
import logo from './logo.svg';
import NavBar from './components/Navbar'
import AllQuestions from './components/AllQuestions'
import LeaderBoard from './components/LeaderBoard'
import QuestionPage from './components/QuestionPage'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css';
import './styles.scss';

function App() {
  return (
    <Router>
      <Fragment>
        <NavBar />
        <Switch>
          <ProtectedRoute
            path="/"
            exact
            component={AllQuestions}
          />
          <ProtectedRoute path="/leaderboard" component={LeaderBoard} /> 
          <Route path="/login" component={Login} />
          <ProtectedRoute path="/questions/:id" component={QuestionPage} />
          {/* <ProtectedRoute path="/newquestion" component={NewQuestion} />
          <ProtectedRoute path="/profile" component={Profile} />
          <Route component={NotFound} /> */}
        </Switch>
        {/* <Message /> */}
      </Fragment>
    </Router>
  );
}

// export default connect(null, { getAllUsers: fetchUsers })(App)
export default App

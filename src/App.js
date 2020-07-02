import React, { Fragment } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Login from './components/Login'
import AppNav from './components/AppNav'
import AllQuestions from './components/AllQuestions'
import NewQuestionForm from './components/NewQuestionForm'
import LeaderBoard from './components/LeaderBoard'
import QuestionPage from './components/QuestionPage'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'
import './App.css';
import './styles.scss';

function App() {
  return (
    <Router>
      <Fragment>
        <AppNav />
        <Switch>
          <ProtectedRoute path="/" exact component={AllQuestions} />
          <ProtectedRoute path="/login" component={Login} />
          <ProtectedRoute path="/leaderboard" component={LeaderBoard} /> 
          <ProtectedRoute path="/add" component={NewQuestionForm} />
          <ProtectedRoute path="/questions/:id" component={QuestionPage} />
          <ProtectedRoute component={NotFound} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App

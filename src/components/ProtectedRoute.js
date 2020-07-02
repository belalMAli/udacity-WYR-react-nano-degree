import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from "react-redux"

const ProtectedRoute = ({ component: Component, authedUser, ...rest }) => {
  return (
    <Route {...rest} render={
      props => {
        if (authedUser) {
          if (rest.path === '/login') {
            return <Redirect to={
              {
                pathname: '/'
              }
            } />
          }
          return <Component {...rest} {...props} />
        } else {
          if (rest.path === '/login') {
            return <Component {...rest} {...props} />
          } else {
            return <Redirect to={
              {
                pathname: '/login'
              }
            } />
          }
        }
      }
    } />
  )
}

const mapStateToProps = ({ authedUser }) => ({
    authedUser
})
export default connect(mapStateToProps)(ProtectedRoute)
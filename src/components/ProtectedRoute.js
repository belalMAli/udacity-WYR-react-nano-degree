import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from "react-redux"

const ProtectedRoute = ({ component: Component, authedUser, ...rest }) => {
  return (
    <Route {...rest} render={
      props => {
        if (authedUser) {
          return <Component {...rest} {...props} />
        } else {
          return <Redirect to={
            {
              pathname: '/login',
              state: {
                from: props.location
              }
            }
          } />
        }
      }
    } />
  )
}

// export default ProtectedRoute;
const mapStateToProps = ({ authedUser }) => ({
    authedUser
})
export default connect(mapStateToProps)(ProtectedRoute)
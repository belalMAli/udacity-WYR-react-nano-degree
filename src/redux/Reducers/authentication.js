import { LOGIN, LOGOUT } from "../Actions/authentication"

const authentication = (state = null, action) => {
  switch (action.type) {
    case LOGIN:
      return action.id
    case LOGOUT:
      return null
    default:
      return state
  }
}

export default authentication

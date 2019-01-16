import { connect } from 'react-redux';
import LoginComponent from '../components/Login'
import { addUser, login } from "../store/actions";

const mapDispatchToProps = dispatch => ({
  addUser: (name) => {
    dispatch(addUser(name))
  },
  login: (name) => {
    dispatch(login(name))
  }
})

export const Login = connect(() => ({}), mapDispatchToProps)(LoginComponent)
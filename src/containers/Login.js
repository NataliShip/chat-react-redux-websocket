import { connect } from 'react-redux';
import LoginComponent from '../components/Login'
import { addUser } from "../store/actions";

const mapDispatchToProps = dispatch => ({
  addUser: (name) => {
    dispatch(addUser(name))
  }
})

export const Login = connect(() => ({}), mapDispatchToProps)(LoginComponent)
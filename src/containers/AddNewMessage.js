import { connect } from 'react-redux';
import AddNewMessageComponent from '../components/AddNewMessage'
import { addMessage } from "../store/actions";

const mapDispatchToProps = dispatch => ({
  addMessage: (message, author) => {
    dispatch(addMessage(message, author));
  }
})

export const AddNewMessage = connect(state => ({
  name: state.login
}), mapDispatchToProps)(AddNewMessageComponent)
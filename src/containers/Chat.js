import { connect } from 'react-redux';
import ChatComponent from '../components/Chat'

export const Chat = connect(state => ({
  messages: state.messages
}), {})(ChatComponent)
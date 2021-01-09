import { React } from 'react'
import {Box} from 'rebass'
import MessageSendBox from './MessageSendBox.js'
import MessageList from './MessageList.js'

const GroupPage = props => {
  return (
    <Box>
      <MessageSendBox/>
      <MessageList/>
    </Box>
  );
}

export default GroupPage;
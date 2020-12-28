import { useTheme } from '@emotion/react';
import { React } from 'react'
import {
  Box,
  Text
} from 'rebass'
import MessageSendBox from './MessageSendBox.js'
import MessageList from './MessageList.js'

const GroupPage = props => {
  const theme = useTheme();
  return (
    <Box>
      <MessageSendBox/>
      <MessageList/>
    </Box>
  );
}

export default GroupPage;
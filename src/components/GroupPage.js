import { React } from 'react'
import { Box, Heading, Text } from 'rebass'
import MessageSendBox from './MessageSendBox.js'
import MessageList from './MessageList.js'
import { useTheme } from '@emotion/react';
import { useLocation } from 'react-router-dom';

const GroupPage = props => {
  const theme = useTheme();
  let location = useLocation();
  return (
    <>
      <Box theme={theme} sx={{
          backgroundColor:"azure",
      }}>
        <Box theme={theme} sx={{
            backgroundColor:"cadetblue",
            padding:"10px"
          }}
        >
          <Heading theme={theme} variant='title' sx={{fontSize: 7}}> ChatWithMe </Heading>
          <Text theme={theme} variant='subtitle' sx={{fontSize: 3}} >group code: {location.state.group_id}</Text>
        </Box>
        <MessageList/>
        <MessageSendBox/>
      </Box>
    </>
  );
}

export default GroupPage;
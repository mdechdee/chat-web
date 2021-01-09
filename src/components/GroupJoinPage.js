import { useTheme } from '@emotion/react';
import { React } from 'react'
import { Flex, Text, Box } from 'rebass'
import GroupJoinBox from './GroupJoinBox.js'
import GroupNewButton from './GroupNewButton.js'

const GroupJoinPage = () => {
  const theme = useTheme();
  return (
    <Box sx={{
      position: 'absolute',
      width:'1000px',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -60%)',
      padding: '50px'
    }}>
      <Flex
      theme={theme}
        sx={{
          flexDirection: 'column',
          '*': { my: '.5em', mx: '.5em' }
        }}
      >

        <Text fontSize='5em' fontWeight='bold' textAlign='center' marginBottom='100px'> ChatWithMe </Text>
        <GroupNewButton />
        <GroupJoinBox />
      </Flex>
    </Box>
  );
}

export default GroupJoinPage;
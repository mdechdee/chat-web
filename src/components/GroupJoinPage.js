import { useTheme } from '@emotion/react';
import { React } from 'react'
import { Flex } from 'rebass'
import GroupJoinBox from './GroupJoinBox.js'
import GroupNewButton from './GroupNewButton.js'

const GroupJoinPage = () => {
  const theme = useTheme();
  return (
    <Flex
    theme={theme}
      sx={{
        flexDirection: 'column',
        '*': { my: '.5em', mx: '.1em' }
      }}
    >
      <GroupNewButton />
      <GroupJoinBox />
    </Flex>
  );
}

export default GroupJoinPage;
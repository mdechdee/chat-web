import { useTheme } from '@emotion/react';
import { React } from 'react'
import {
  Flex
} from 'rebass'
import GroupJoinBox from './GroupJoinBox.js'
import GroupNewButton from './GroupNewButton.js'

const GroupJoinPage = props => {
  const theme = useTheme();
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        '*': { my: '.5em' }
      }}
    >
      <GroupNewButton />
      <GroupJoinBox />
    </Flex>
  );
}

export default GroupJoinPage;
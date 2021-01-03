import { useTheme } from '@emotion/react';
import { useState, useEffect, React } from 'react'
import { useHistory } from 'react-router-dom';
import { Button, Flex } from 'rebass'
import { Input } from '@rebass/forms'
import axios from 'axios';

const GroupJoinBox = props => {
  const theme = useTheme();
	const [groups, setGroups] = useState([]);
  const [inputGroupValue, setInputGroupValue] = useState("");
  let history = useHistory();

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios('http://localhost:5000/api/group');
      setGroups(result.data);
		};
		fetchData();
  }, []);
  
  const joinGroup = async () => {
    const groupNames = groups.map(({group_id}) => group_id);
    if(groupNames.includes(inputGroupValue)){
      history.push({
        pathname: '/group/' + inputGroupValue,
        state:{
          group_id: inputGroupValue
        }
      });
    }
  };

  const handleTextChange = (e) => {
    if(e.target.value.length > 5) return
    setInputGroupValue(e.target.value.toLowerCase())
  }

  return (
    <Flex theme={theme} sx={{ '> *': { mx: '1em' } }}>
      <Input
        id='group_id'
        name='group_id'
        type='id'
        theme={theme}
        value={inputGroupValue}
        onChange={handleTextChange}
      />
      <Button
        onClick={joinGroup}
        theme={theme}>
        Join Group
      </Button>
    </Flex>
  );
}

export default GroupJoinBox;
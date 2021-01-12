import { useTheme } from '@emotion/react';
import { React } from 'react'
import { useHistory } from 'react-router-dom';
import {
	Button
} from 'rebass'
import axios from 'axios'

function makeid(length) {
  var result = '';
  var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const GroupNewButton = props => {
  const theme = useTheme();
  const history = useHistory();
  const createGroup = async () =>{
    let new_id = makeid(5);
    const groups = await axios.get('http://localhost:5000/api/group');
    const groupNames = groups.data.map(({group_id}) => group_id);

    console.log(groupNames);

    while(!groupNames.includes(new_id)){
      new_id = makeid(5);
    }

    const res = await axios.post('http://localhost:5000/api/group', {
      group_id: new_id,
    });

    history.push({
      pathname: '/group/' + new_id,
      state: {
        group_id: new_id
      }
    });
  }

  return(
    <Button onClick={createGroup} theme={theme} variant ='outline'>
      Create a Group
    </Button>
  );
}

export default GroupNewButton;
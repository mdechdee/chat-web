import { useTheme } from '@emotion/react';
import {React} from 'react'
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

  const createGroup = () =>{
    let new_id = makeid(5);
    axios.post('http://localhost:5000/api/group', {
      group_id: new_id,
    })
    .then(function (response) {
      console.log(response);
    }) 
    .catch(function (error) {
      console.log(error);
    });
  }

  return(
    <Button onClick={createGroup} theme={theme}>
      Create New Group
    </Button>
  );
}

export default GroupNewButton;
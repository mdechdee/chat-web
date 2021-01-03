import {React, useState} from 'react'
import {
	Box,
	Button,
	Flex,
} from 'rebass'
import { Label, Input, Textarea } from '@rebass/forms'
import { useTheme } from '@emotion/react'
import { useLocation } from 'react-router-dom'
import {useAuth} from './authentication/Auth.js'
import axios from 'axios'

const MessageSendBox = () => {
	const theme = useTheme();
	const location = useLocation();
	const auth = useAuth();
	const [textValue, setTextValue] = useState("");

	const onTextSubmit = () => {
		console.log(textValue, auth.user, location.state.group_id);
		axios.patch('http://localhost:5000/api/message', {
			type: "add",
			message: textValue,
			sender: auth.user,
			group: location.state.group_id,
		})
    .then(function (response) {
      console.log(response);
    }) 
    .catch(function (error) {
      console.log(error);
    });
	}

	return (
		<Flex
			theme={theme}
			flexGrow='1'
			flexDirection='column'
			sx={{
				'*': {
					mb: 1
				}
			}}
		>
			<Box 
			sx={{ py: 3 }} 
			theme={theme} 
			>
				<Label theme={theme} htmlFor='title'>New Message</Label>
				<Textarea
					id='message'
					name='message'
					value = {textValue}
					onChange={(e) => {setTextValue(e.target.value)}}
					placeholder='some of your thoughts...'
					theme={theme}
				/>
				<Button theme={theme} onClick={onTextSubmit} float='right'>Send</Button>
			</Box>
		</Flex>
	)
}

export default MessageSendBox;
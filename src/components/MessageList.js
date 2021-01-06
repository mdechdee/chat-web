import { React, useState, useEffect } from 'react'
import {
	Box,
	Heading,
} from 'rebass'
import MessageCard from './MessageCard.js'
import axios from 'axios';
import { useTheme } from '@emotion/react';
import { useLocation } from 'react-router-dom';
import { useAuth } from './authentication/Auth.js';


function MessageList(props) {
	let location = useLocation();
	const [messages, setMessages] = useState([]);
	const theme = useTheme();
	console.log(location.state.group_id);

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios('http://localhost:5000/api/message/'+location.state.group_id);
			setMessages(result.data);
		};
		fetchData();
	}, [messages]);

	return (
		<>
			<Box theme={theme}>
				<Heading theme={theme}> Some dudes text </Heading>
				{
					(() => {
					if(messages != []){
						return(messages.map((item,index) => ( 
							<MessageCard
								key={index}
								title={item.sender}
								message={item.message}
							></MessageCard>
						)));
					}
					else{return(<></>)};
					})()
				}
			</Box>
		</>
	)
}

export default MessageList;
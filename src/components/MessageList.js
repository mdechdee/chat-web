import { React, useState, useEffect } from 'react'
import {
	Box,
	Heading,
} from 'rebass'
import MessageCard from './MessageCard.js'
import axios from 'axios';
import { useTheme } from '@emotion/react';
import { useLocation } from 'react-router-dom';


function MessageList(props) {
	let location = useLocation();
	const [data, setData] = useState([]);
	const theme = useTheme();

	console.log(location.state.group_id);

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios('http://localhost:5000/api/message/'+location.state.group_id);
			setData(result.data);
			console.log(result.data);
		};
		fetchData();
	}, []);

	return (
		<>
			<Box theme={theme}>
				<Heading theme={theme}> Some dudes text </Heading>
				{
					(() => {
					if(data != []){
						return(data.map(item => ( 
							<MessageCard
								key={item._id}
								title={item.title}
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
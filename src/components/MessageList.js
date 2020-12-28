import { React, useState, useEffect } from 'react'
import {
	Box,
	Heading,
} from 'rebass'
import MessageCard from './MessageCard.js'
import axios from 'axios';
import { useTheme } from '@emotion/react';


function MessageList(props) {
	const [data, setData] = useState([]);
	const theme = useTheme();

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios('/posts');
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
					data.map(item => (
						<MessageCard
							key={item._id}
							title={item.title}
							message={item.message}
						></MessageCard>
					))
				}
			</Box>
		</>
	)
}

export default MessageList;
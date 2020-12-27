import {React, useState, useEffect } from 'react'
import {
	Box,
	Heading,
} from 'rebass'
import TextCard from './TextCard.js'
import axios from 'axios';
import { useTheme } from '@emotion/react';
const url = "http://localhost:5000/posts";

function TextList(props) {

	const [data, setData] = useState([]);
	const theme = useTheme();
	
	useEffect(() => {
		const fetchData = async () => {
			const result = await axios(url,);
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
						<TextCard 
							key={item._id}
							title={item.title}
							message={item.message}
						></TextCard>
					))
				}
			</Box>
		</>
	)
}

export default TextList;
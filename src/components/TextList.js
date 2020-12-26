import React from 'react'
import {
    Box,
    Heading,
} from 'rebass'
import TextCard from './TextCard.js'


const TextList = () => {
	return (
		<>
			<Box
				flex='1 1 auto'
				p={3}
				bg='primary'>
				<Heading> Some dudes text </Heading>
				<TextCard></TextCard>
				<TextCard></TextCard>
				<TextCard></TextCard>

			</Box>
		</>
	)
}

export default TextList;
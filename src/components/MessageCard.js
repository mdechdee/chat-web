import { useTheme } from '@emotion/react';
import { React, useState } from 'react'
import {
	Card,
	Heading,
	Text
} from 'rebass'

const TextCard = props => {
	const theme = useTheme();
	const [cardProps, setCardProps] = useState(props);
	return (
		<>
			<Card theme={theme} sx={{ mt: 1 }}>
				<Heading theme={theme}> {cardProps.title} </Heading>
				<Text theme={theme}> {cardProps.message} </Text>
			</Card>
		</>
	)
}

export default TextCard;
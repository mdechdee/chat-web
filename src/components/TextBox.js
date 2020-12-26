import React from 'react'
import {
	Box,
	Image,
	Heading,
	Text
} from 'rebass'
import { Label, Input } from '@rebass/forms'

const TextBox = () => {
	return (
		<>
			<Box>
				<Label htmlFor='email'>Type Here</Label>
				<Input
					id='text'
					name='text'
					type='text'
					placeholder='some of your thoughts...'
				/>
			</Box>
		</>
	)
}

export default TextBox;
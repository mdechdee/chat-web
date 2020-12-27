import React from 'react'
import {
	Box,
} from 'rebass'
import { Label, Input } from '@rebass/forms'
import { useTheme } from '@emotion/react'

const TextBox = () => {
	const theme = useTheme()
	return (
		<>
			<Box sx={{py: '2em'}} theme={theme}>
				<Label theme={theme} htmlFor='email'>Type Here</Label>
				<Input
					id='text'
					name='text'
					type='text'
					placeholder='some of your thoughts...'
					theme={theme}
				/>
			</Box>
		</>
	)
}

export default TextBox;
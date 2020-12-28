import React from 'react'
import {
	Box,
	Button,
	Flex,
} from 'rebass'
import { Label, Input, Textarea } from '@rebass/forms'
import { useTheme } from '@emotion/react'

const TextBox = () => {
	const theme = useTheme()
	return (
		<Flex
			theme={theme}
			flexGrow='1'
			flexDirection='column'
			sx={{
				'*': {
					mb: '.5em'
				}
			}}
			>
			<Box sx={{py: '2em'}} theme={theme}>
				<Label theme={theme} htmlFor='title'>Title</Label>
				<Input
					id='title'
					name='title'
					type='title'
					mb = '1em'
					theme={theme}
				/>

				<Textarea
					id='message'
					name='message'
					placeholder='some of your thoughts...'
					theme={theme}
				/>
				<Button theme={theme} float='right'>Send</Button>
			</Box>
		</Flex>
	)
}

export default TextBox;
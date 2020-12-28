import React from 'react'
import {
	Box,
	Button,
	Flex,
} from 'rebass'
import { Label, Input, Textarea } from '@rebass/forms'
import { useTheme } from '@emotion/react'

const MessageSendBox = () => {
	const theme = useTheme()
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
			<Box sx={{ py: 3 }} theme={theme}>
				<Label theme={theme} htmlFor='title'>New Message</Label>

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

export default MessageSendBox;
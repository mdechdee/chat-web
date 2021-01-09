import { React } from 'react'
import SignupBox from './SignupBox'
import { Heading, Text, Box } from 'rebass';
import { useTheme } from '@emotion/react';

const SignupPage = () => {
	const theme = useTheme();
	return (
		<>
			<Box theme={theme} variant='flexColumn'>
				<Text theme={theme} variant='subtitle'>Sign up to</Text>
				<Heading theme={theme} variant='title' sx={{fontSize: 7}}> ChatWithMe </Heading>
				<SignupBox />
			</Box>
		</>
	)
}

export default SignupPage;
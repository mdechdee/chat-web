import { Button, Box, Text } from 'rebass';
import { Input } from '@rebass/forms'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import axios from 'axios';


const SignupBox = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	let history = useHistory();
	const theme = useTheme();
	const signup = async () => {
		console.log("aaa");
		try {
			const res = await axios.post('http://localhost:5000/api/auth/signup',
				{
					username, password
				});
			history.push({
				pathname: '/login',
				state: {
					message: "You successfully registered."
				}
			})
		} catch (err) {
			setError(err.message);
		}
	}
	return (
		<Box
			sx={{
				position: 'absolute',
				top: '80px',
				height: '500px',
				width: '400px',
				left: '50%',
				transform: 'translate(-50%, 0)',
				padding: '50px',
				backgroundColor: 'ghostwhite',
				borderStyle:'solid',
				background: 'linear-gradient(to bottom, #99ccff 0%, #ffcccc 100%)',
				borderRadius:'8px',
				borderWidth:'1px'
			}}
		>
			<Text fontSize='2em' fontWeight='bold' textAlign='center'> Sign up </Text>
			<Text fontSize='1em' fontWeight='bold' sx={{
				mt: '1em'
			}}> Username </Text>
			<Input theme={theme}
				id="username" 
				label="Username" 
				value={username}
				sx = {{
					mt: '0.1em',
					backgroundColor: 'white'
				}}
				onChange={(e) => setUsername(e.target.value)} 
			/>
			<Text fontSize='1em' fontWeight='bold' sx={{
				mt: '1em'
			}}> Password </Text>
			<Input theme={theme} 
				id="password" 
				label="Password" 
				value={password} 
				sx = {{
					mt: '0.1em',
					backgroundColor: 'white'
				}}
				onChange={(e) => setPassword(e.target.value)} 
				/>
			{(error) ? <Text fontSize='1em' color='red' textAlign='center' fontWeight='bold' 
				sx = {{
					mt: '0.5em'
				}}>{error}</Text> : <Text></Text>
			}
			<Button theme={theme}
				sx = {{
					mt: '0.5em',
					position: 'relative',
					left: '50%',
					backgroundColor: 'salmon',
					transform: 'translate(-50%, 0)'
				}}
				onClick={signup}
				>
					Sign up
			</Button>
		</Box>
	)
}
export default SignupBox;
import { Button, Box, Text } from 'rebass';
import { Input, Label } from '@rebass/forms'
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
		<Box theme={theme} variant='flexColumn' width={0.8}>
			<Box theme={theme} sx={{my: 4}}>
				<Label theme={theme}> Username </Label>
				<Input theme={theme}
					id="username" 
					label="Username" 
					value={username}
					onChange={(e) => setUsername(e.target.value)} 
				/>
				<Label theme={theme}> Password </Label>
				<Input theme={theme} 
					id="password" 
					label="Password" 
					value={password}
					onChange={(e) => setPassword(e.target.value)} 
					/>
				{(error) ? <Text fontSize='1em' color='red' textAlign='center' fontWeight='bold' 
					sx = {{
						mt: '0.5em'
					}}>{error}</Text> : <Text></Text>
				}
			</Box>
			<Button theme={theme}
				onClick={signup}
				variant='outline'
				>
					Sign up
			</Button>
		</Box>
	)
}
export default SignupBox;
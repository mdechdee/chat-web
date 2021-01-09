import { Button, Box } from 'rebass';
import { Input } from '@rebass/forms'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


const SignupBox = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	let history = useHistory();
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
		<Box>
			{(error) ? <p>{error}</p> : <p></p>}
			<Input theme={theme} id="username" label="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
			<Input theme={theme} id="password" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
			<Button theme={theme} onClick={signup}>Sign up</Button>
		</Box>
	)
}
export default SignupBox;
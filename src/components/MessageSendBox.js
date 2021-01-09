import {React, useState, useRef} from 'react'
import {
	Box,
	Button,
	Flex,
	Text
} from 'rebass'
import { useSpring, animated, useChain} from "react-spring"
import AddImg from '../icons/addimg.png'
import { Label, Textarea, Input } from '@rebass/forms'
import { useTheme } from '@emotion/react'
import { useLocation } from 'react-router-dom'
import {useAuth} from './authentication/Auth.js'
import axios from 'axios'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const MessageSendBox = () => {

	const theme = useTheme();
	const location = useLocation();
	const auth = useAuth();
	const [textValue, setTextValue] = useState("");
	const [img, setImg] = useState(null);

	const [addprops,setaddprops] = useSpring( () => ({ deg: 0 }));

	const onTextSubmit = () => {
		console.log(textValue, auth.user, location.state.group_id);
		axios.patch('http://localhost:5000/api/message', {
			type: "add",
			message: textValue,
			sender: auth.user,
			group: location.state.group_id,
		})
		.then(function (response) {
			setTextValue("");
			console.log(response);
		}) 
		.catch(function (error) {
			console.log(error);
		});
	}

	return (
			<Box 
				theme={theme} 
				sx={{ py: 1 , borderRadius:'10px', margin:'10px',
					display:'flex', flexDirection:'row', justifyContent:'space-evenly', backgroundColor:"white"
				}} 
			>
				{/* <animated.div 
						onMouseMove={() => {
							setaddprops({ deg: 90 });
							console.log("mouse on");
						}}
						onMouseLeave={() => setaddprops({transform:"rotate(0deg)"})} 
						style={{transform:`rotate(deg${addprops.deg})`, background:`linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)`}}
				/> */}
				<Label width='30px' height='30px' marginTop='15px' marginLeft='10px'>
					{/* icon */}
					
					<img src={AddImg} width='30px' height='30px'></img>
					<Input id='upload-photo' type="file" display="none"></Input>
				</Label>
				
				<Textarea
					id='message'
					name='message'
					value = {textValue}
					onChange={(e) => {setTextValue(e.target.value)}}
					placeholder='some of your thoughts...'
					theme={theme}
					sx={{
						margin:'10px',
						height:'40px',
						width:"80%", borderStyle:"none"
					}}
				/>
				<Button theme={theme} onClick={onTextSubmit} variant = 'outline' sx={{height:'40px', margin:'10px'}}>Send</Button>
				
			</Box>
		// 
	)
}

export default MessageSendBox;
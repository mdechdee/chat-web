import logo from './logo.svg';
import './App.css';
import {Flex} from 'rebass'
import TextBox from './components/TextBox.js'
import TextList from './components/TextList.js'

function App() {
	return (
		<>
			<Flex 
			justifyContent='center'
			flexDirection='column'
			width={0.5}>
				<TextBox></TextBox>
				<TextList></TextList>
			</Flex>
		</>
	);
}

export default App;

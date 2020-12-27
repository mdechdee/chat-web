import {Flex} from 'rebass'
import TextBox from './components/TextBox.js'
import TextList from './components/TextList.js'
import { ThemeProvider } from '@emotion/react'
import preset from '@rebass/preset'

function App() {
	return (
		<ThemeProvider theme={preset}>
			<Flex theme={preset} flexDirection='column' width={1/2} mx='auto' my='50px'>
				<TextBox></TextBox>
				<TextList></TextList>
			</Flex>
		</ThemeProvider>
	);
}

export default App;

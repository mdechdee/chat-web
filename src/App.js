import { Flex } from 'rebass'
import { ThemeProvider } from '@emotion/react'
import preset from '@rebass/preset'
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import LoginPage from './components/LoginPage.js'
import GroupJoinPage from './components/GroupJoinPage.js'
import GroupPage from './components/GroupPage.js'
import { ProvideAuth } from './components/authentication/Auth.js'

function App() {
	return (
		<ThemeProvider theme={preset}>
			<ProvideAuth>
				<Router>
					<Flex theme={preset} flexDirection='column' width={1 / 2} mx='auto' my='50px'>
						<Switch>
							<Route exact path="/">
								<LoginPage />
							</Route>
							<Route exact path="/login">
								<LoginPage />
							</Route>
							<Route path="/join_group">
								<GroupJoinPage />
							</Route>
							<Route path="/group/:group_id">
								<GroupPage />
							</Route>
						</Switch>
					</Flex>
				</Router>
			</ProvideAuth>
		</ThemeProvider>
	);
}

export default App;

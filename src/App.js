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
import PrivateRoute from './components/authentication/PrivateRoute.js'

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
							<PrivateRoute path="/join_group">
								<GroupJoinPage />
							</PrivateRoute>
							<PrivateRoute path="/group/:group_id">
								<GroupPage />
							</PrivateRoute>
						</Switch>
					</Flex>
				</Router>
			</ProvideAuth>
		</ThemeProvider>
	);
}

export default App;

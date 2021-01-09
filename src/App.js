import { Flex } from 'rebass'
import { ThemeProvider } from '@emotion/react'
import preset from '@rebass/preset'
import theme from './theme.js'
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import HomePage from './components/HomePage.js'
import VisitorPage from './components/VisitorPage.js'
import LoginPage from './components/LoginPage.js'
import SignupPage from './components/SignupPage.js'
import GroupJoinPage from './components/GroupJoinPage.js'
import GroupPage from './components/GroupPage.js'
import { useProvideAuth, authContext } from './components/authentication/Auth.js'
import PrivateRoute from './components/authentication/PrivateRoute.js'

function App() {
	const auth = useProvideAuth();
	return (
		<ThemeProvider theme={theme}>
			<authContext.Provider value={auth}>
				<Router>
					<Flex theme={preset} flexDirection='column' width={1 / 2} mx='auto' my='50px'>
						<Switch>
							<Route exact path="/">
								{!auth.user ? <VisitorPage />: <HomePage/> }
							</Route>
							<Route exact path="/login">
								<LoginPage />
							</Route>
							<Route exact path="/signup">
								<SignupPage />
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
			</authContext.Provider>
		</ThemeProvider>
	);
}

export default App;

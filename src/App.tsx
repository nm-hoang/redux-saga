import { Button } from '@material-ui/core';
import cityApi from 'api/cityApi';
import { NotFound, PrivateRoute } from 'components/common';
import { AdminLayout } from 'components/layout';
import { authActions } from 'features/auth/authSlice';
import LoginPage from 'features/auth/pages/LoginPage';
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import { useAppDispatch } from './app/hooks';

function App() {
	const dispatch = useAppDispatch();
	useEffect(() => {
		cityApi.getAll().then((response) => console.log(response));
	}, []);
	return (
		<>
			<Button
				variant="contained"
				onClick={() => {
					dispatch(authActions.logout());
				}}
			>
				Logout
			</Button>
			<Switch>
				<Route path="/login">
					<LoginPage />
				</Route>
				<PrivateRoute path="/admin">
					<AdminLayout />
				</PrivateRoute>
				<Route>
					<NotFound />
				</Route>
			</Switch>
		</>
	);
}

export default App;

import { Box, Button, makeStyles, Paper, Typography } from '@material-ui/core';
import { useAppDispatch } from 'app/hooks';
import React from 'react';
import { authActions } from '../authSlice';

const useStyles = makeStyles((theme: any) => ({
	root: {
		display: 'flex',
		flexFlow: 'row nowrap',
		justifyContent: 'center',
		alignItems: 'center',
		minHeight: '50vh',
	},
	box: {
		padding: theme.spacing(3),
	},
}));

export default function LoginPage(): JSX.Element {
	const classes = useStyles();
	const dispatch = useAppDispatch();
	const handleLogin = () => {
		dispatch(
			authActions.login({
				username: 'hoangnguyen',
				password: '123123',
			})
		);
	};
	return (
		<div className={classes.root}>
			<Paper elevation={1} className={classes.box}>
				<Typography variant="h5" component="h1">
					Student Management
				</Typography>
				<Box mt={4}>
					<Button onClick={handleLogin} fullWidth variant="contained" color="primary">
						Login
					</Button>
				</Box>
			</Paper>
		</div>
	);
}

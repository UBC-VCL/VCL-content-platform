import React from 'react';
import { Snackbar, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { selectApp, appActions } from '@redux/slices/AppRedux';
import './AlertPopup.css';

const AlertPopup = () => {
	const dispatch = useAppDispatch();
	const { alert } = useAppSelector(selectApp);

	const getIsOpen = () => alert !== null;

	const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
		if (reason === 'clickaway') return;

		dispatch(appActions.setAlert(null));
	};

	return (
		<Snackbar
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'left',
			}}
			key={alert}
			open={getIsOpen()}
			autoHideDuration={5000}
			onClose={handleClose}
			message={alert}
			action={
				<IconButton aria-label="close" color="inherit" onClick={handleClose}>
					<CloseIcon />
				</IconButton>
			}
		/>
	);
};

export default AlertPopup;

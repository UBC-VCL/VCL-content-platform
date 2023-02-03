import React from "react";
import { Snackbar, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useAppStore } from "stores/AppStore";

const AlertPopup = () => {
  const alert = useAppStore((state) => state.alert)
  const setAlert = useAppStore((state) => state.setAlert)

  const getIsOpen = () => alert !== null;

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;

    setAlert(null)
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
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


import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import './ConfirmationWindow.css';
import { DialogContentText } from "@mui/material";
import * as React from "react";
import Button from "@mui/material/Button";
export interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
  deleteSnapshot: ()=> Promise<boolean>;
}

function ConfirmationDailog({open, onClose, deleteSnapshot}: SimpleDialogProps) {
    // This state variable indicates if the snapshot selected is deleted successfully, which can be used to controll the ending of the dialog associated and error message.
    // if the snapshot clicked is deleted,deleteSucces = true.
    const [deleteSuccess, setDeleteSuccess] = React.useState(true);
    const handleClose = () => {
      onClose();
      setDeleteSuccess(true);
    };
  
    return (
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Are you sure to delete the snapshot?</DialogTitle>
        {!deleteSuccess ? (
          <DialogContentText className='errorText'>error: fail to delete</DialogContentText>
        ) : null}
        <Button
          onClick={() => {
            deleteSnapshot()
            .then(()=>{
                setDeleteSuccess(true);
                handleClose();
            }
            ).catch((err)=>{
                setDeleteSuccess(false);
            })
          }}
        >
          Yes
        </Button>
        <Button onClick={handleClose}>Cancel</Button>
      </Dialog>
    );
  }

  export default ConfirmationDailog;
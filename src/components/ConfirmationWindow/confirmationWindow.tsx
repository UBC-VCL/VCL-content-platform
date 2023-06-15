
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import './confirmationWindow.css';
import { DialogContentText } from "@mui/material";
const emails = ["username@gmail.com", "user02@gmail.com"];
import * as React from "react";
import Button from "@mui/material/Button";
export interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
  deleteSnapshot: ()=> Promise<boolean>;
}

function ConfirmationDailog(props: SimpleDialogProps) {
    const { onClose, open, deleteSnapshot } = props;
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
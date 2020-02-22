import Modal from '@material-ui/core/Modal';
import React  from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
export const ModelComponent=(props)=>{
    {/** return(
            <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={props.open}
        onClose={props.close}
      ><div style={{"height" : "100%", "width": "100%"}}>
       <iframe src={props.url} allowfullscreen/></div>
      </Modal>
        )**/}
     return(

    <div>
      <Dialog open={props.open} onClose={props.close} aria-labelledby="form-dialog-title" fullScreen PaperProps={{
    style: {
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
  }}>
        <DialogContent  style={{height : '100%', width: '100%'}}>
                 <iframe src={props.url} width="90%"
        height="90%" allowfullscreen/>

                  </DialogContent>
        <DialogActions>
          <Button onClick={props.close} color="primary">
            Cancel
          </Button>
                  </DialogActions>
      </Dialog>
    </div>
  );

}


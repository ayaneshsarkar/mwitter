import React from 'react';
import Dialog from '@material-ui/core/Dialog';

const Alert = props => {
  return (
    <Dialog 
      open={props.open}
      onClose={() => props.setClose(false)}
      classes={{ paper: 'br-none' }}
      maxWidth="lg"
    >
      { props.children }
    </Dialog>
  );
}

export default Alert;
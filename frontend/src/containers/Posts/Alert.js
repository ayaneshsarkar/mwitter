import React, { forwardRef } from 'react';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';

const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

const Alert = props => {
  const closeAlert = () => {
    if(props.optionalErr) {
      props.optionalErr('');
    }

    props.setClose(false);
  }

  return (
    <Dialog 
      open={props.open}
      onClose={closeAlert}
      classes={!props.borderRadius ? { paper: 'br-none' } : undefined}
      maxWidth="lg"
      TransitionComponent={props.transition ? Transition : undefined}
    >
      { props.children }
    </Dialog>
  );
}

export default Alert;
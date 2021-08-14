import React, { forwardRef } from 'react';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

const Alert = props => {
  const closeAlert = () => {
    if(props.optionalErr) {
      props.optionalErr('');
    }

    props.setClose(false);
  }

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Dialog 
      PaperProps={{
        style: {
          backgroundColor: 'transparent',
        },
      }}
      open={props.open}
      onClose={closeAlert}
      classes={!props.borderRadius ? { paper: 'br-none' } : undefined}
      maxWidth="lg"
      TransitionComponent={props.transition ? Transition : undefined}
      fullScreen={props.fullScreen ? fullScreen : undefined}
    >
      { props.children }
    </Dialog>
  );
}

export default Alert;
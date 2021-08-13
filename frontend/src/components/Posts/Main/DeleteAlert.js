import React from 'react';
import Alert from '../../../containers/Posts/Alert';

const DeleteAlert = ({ open, setClose, callback, id }) => {
  const performAction = async (callback, id) => {
    try {
      await callback(id);
      setClose(false);
    } catch(err) {
      console.log(err.message);
    }
  }

  return (
    <Alert open={open} setClose={setClose} transition={true}>
      <div className="alert delete">
        <h2 className="heading">Are You Sure?</h2>

        <div className="buttonBox">
          <button className="button" onClick={() => setClose(false)}>Cancel</button>
          <button className="button delete" onClick={() => performAction(callback, id)}>
            Delete
          </button>
        </div>
      </div>
    </Alert>
  );
}

export default DeleteAlert;
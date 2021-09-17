import React, { useState, useEffect } from 'react';
import history from '../../config/history';

const UserIconBg = ({ user }) => {
  const [avatar, setAvatar] = useState('');

  useEffect(() => getAvatar(user), [user]);

  const getAvatar = (user) => {
    if(user && user.acf && user.acf.avatar) {
      setAvatar(user.acf.avatar.sizes.large);
    }
  }
  
  return (
    <div className="postNavIconBox bg" onClick={() => history.push(`/user/${user.id}`)}
      style={{ 
        backgroundImage: `url(${avatar ? user.acf.avatar.sizes.large : ''})` 
      }}
    >
    </div>
  );
}

export default UserIconBg;
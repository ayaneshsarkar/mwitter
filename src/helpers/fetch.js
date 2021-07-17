import { authServer } from '../config/server';

export const fetchFile = async (method, host, fileData) => {
  return (
    await fetch(host, {
      method,
      headers: new Headers({
        'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
        'Content-Disposition': 'form-data;',
      }),
      body: (method !== 'GET') ? fileData : null
    })
  );
}

export const fetchData = async (method, host, body, iterate = true) => {
  let bodyObj = {};

  if(iterate) {
    body.forEach((val, key) => bodyObj[key] = val);
  } else {
    bodyObj = body;
  }

  return (
    await fetch(host, {
      method,
      headers: new Headers({
        'Authorization': `Bearer ${localStorage.getItem('userToken') || ''}`,
        'Content-Type': 'application/json',
      }),
      body: (method !== 'GET') ? JSON.stringify(bodyObj) : null
    })
  );
}

export const fetchSingleData = async (method, host, body) => {
  return (
    await fetch(host, {
      method,
      headers: new Headers({
        'Authorization': `Bearer ${localStorage.getItem('userToken') || ''}`,
        'Content-Type': 'application/json',
      }),
      body: (method !== 'GET') ? JSON.stringify(body) : null
    })
  );
}

export const fetchDataRegister = async (method, host, body) => {
  const token = await fetchAuthRoot();

  const bodyObj = {};
  body.forEach((val, key) => bodyObj[key] = val);

  return (
    await fetch(host, {
      method,
      headers: new Headers({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      }),
      body: (method !== 'GET') ? JSON.stringify(bodyObj) : null
    })
  );
}

export const fetchAuthRoot = async () => {
  const res =  (
    await fetch(authServer, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({username: 'root', password: 'root'})
    })
  );

  const data = await res.json();

  return data.token;
}

export const fetchAuth = async (username, password) => {
  try {
    const res =  (
      await fetch(authServer, {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify({username, password})
      })
    );
  
    const data = await res.json();
    const status = await res.status;
  
    if(status === 200) {
      return data.token;
    } else {
      throw new Error('Username or Password is incorrect.');
    }

  } catch(err) {
    throw new Error('Username or Password is incorrect.'); 
  }
}

export const normalFetch = async (method, host, body) => {
  return (
    await fetch(host, {
      method,
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: (method !== 'GET') ? JSON.stringify(body) : null
    })
  );
}

export const config = async () => {
  const token = await fetchAuthRoot();
  
  return {
    headers: {
      "content-type": "multipart/form-data",
      "authorization": `Bearer ${token}`
    }
  }
}
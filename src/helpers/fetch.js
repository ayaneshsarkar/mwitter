import { authServer } from '../config/server';

export const fetchFile = async (method, host, body) => {
  const token = await fetchAuthRoot();
  return (
    await fetch(host, {
      method,
      headers: new Headers({
        'Authorization': `Bearer ${token}`,
        'Content-Type': `application/json`,
        // 'content-disposition': `attachment; filename=${body.name}`,
      }),
      body: (method !== 'GET') ? body : null
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
        // 'Authorization': `Bearer ${accessToken} ${refreshToken}`,
        'Content-Type': 'application/json',
      }),
      body: (method !== 'GET') ? JSON.stringify(bodyObj) : null
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
  const res = await fetchData('POST', authServer, {username: 'root', password: 'root'}, false);
  const data = await res.json();

  return data.token;
}

export const fetchAuth = async user => {
  const res = await fetchData('POST', authServer, user, false);
  const data = await res.json();

  return data.token;
}
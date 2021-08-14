import { server } from "../config/server";
import { fetchSingleData } from "../helpers/fetch";

export const getUser = async userId => {
  try {
    const res = await fetchSingleData('GET', `${server}/users/${userId}`, null);
    const data = await res.json();

    return data;
    
  } catch(err) {
    throw new Error(err.message);
  }
}
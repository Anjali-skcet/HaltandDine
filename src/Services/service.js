import axios from "axios";

const url= 'http://localhost:8080/forkandfortune';

export const createuser=(user)=>axios.post(url+'/signup',user);

export const listusers = () => axios.get(url);

export const loginuser=(userid)=>axios.get(url+'/'+userid);

export const createreservation=(user)=>axios.post(url+'/reserve',user);
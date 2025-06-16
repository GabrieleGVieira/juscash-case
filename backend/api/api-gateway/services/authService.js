import axios from "axios";

const AUTH_SERVICE_URL = "http://auth-service:3003";

export async function login(email, password) {
  return await axios.post(
    `${AUTH_SERVICE_URL}/auth/login`, 
    {email, password},
  );
}

export async function createUser({email, fullName, password, token}) {
  return await axios.post(
    `${AUTH_SERVICE_URL}/auth/register`, 
    {email, fullName, password},
  )
}

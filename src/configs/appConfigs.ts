const environment = {
  prod: "production",
  dev: "development",
};
// change here to change the environment to prod or dev
const ENVIRONMENT = environment.dev;
export const appConstants = {
  BASE_URL: "https://appanapalli-server.vercel.app/",
  LOGIN_URL: "auth/login",
  GET_DONATIONS_URL: "donation",
  ADD_DONATIONS_URL: "donation/add",
};
const setAppEnvironment = () => {
  if (ENVIRONMENT === "development") {
    appConstants.BASE_URL = "http://localhost:8081/";
    return appConstants;
  }
  return appConstants;
};
export const appConfiguration = setAppEnvironment();
export const storageKeys = {
  AUTH: "APPANAPALLI_AUTH",
};

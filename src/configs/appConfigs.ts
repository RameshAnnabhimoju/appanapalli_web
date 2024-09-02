const environment = {
  prod: "production",
  dev: "development",
};
// change here to chage the environment to prod or dev
const ENVIRONMENT = environment.dev;
export const appConstants = {
  BASE_URL: "",
  LOGIN_URL: "auth/login",
  GET_DONATIONS_URL: "donation",
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
  AUTH: "EDUCARE_AUTH",
};

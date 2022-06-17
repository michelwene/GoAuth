import { parseCookies } from "nookies";
import { IUserData } from "types/auth";

export function handleRecoverUserFromCookie() {
  const { "@GoAuth:useData": userData } = parseCookies();

  if (!userData) return null;

  const userDataJSON: IUserData = JSON.parse(userData);

  return userDataJSON;
}

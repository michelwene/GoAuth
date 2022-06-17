import { setCookie } from "nookies";

interface ISaveDataInCookies {
  keyCookie: string;
  data: string;
  time?: number;
}

export function handleSaveDataInCookies({
  keyCookie,
  data,
  time,
}: ISaveDataInCookies) {
  setCookie(undefined, `@goAuth:${keyCookie}`, data, {
    maxAge: time ?? 60 * 60 * 24 * 7,
    path: "/",
  });
}

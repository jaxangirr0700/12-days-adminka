"use client";
import useAuthStore from "@/store/MyAuthState";
import axios from "axios";

export function PostData(apiEndPoint: string, values: any) {
  const MyAuthState = useAuthStore();

  return axios
    .post(`https://nt.softly.uz/api/app/${apiEndPoint}`, values, {
      headers: { Authorization: `Bearer ${MyAuthState.token}` },
    })
    .then((res) => {
      console.log(res);
      window.location.reload();
    })
    .catch((e) => {
      console.log(e);
    });
}

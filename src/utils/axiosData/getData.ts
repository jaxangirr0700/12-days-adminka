"use client";
import useAuthStore from "@/store/MyAuthState";
import axios from "axios";
import { useEffect, useState } from "react";

export function useFetchData<T>(apiEndPoint: string) {
  const MyAuthState = useAuthStore();
  const [data, setData] = useState<T | null>(null); // Yagona ob'ekt sifatida

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://nt.softly.uz/api${apiEndPoint}`, {
          headers: { Authorization: `Bearer ${MyAuthState.token}` },
        });
        setData(res.data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();
  }, [apiEndPoint, MyAuthState.token]);

  return { data };
}

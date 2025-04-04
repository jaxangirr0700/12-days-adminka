"use client";

import { create } from "zustand";

type User = {
  email: string;
  id: number;
  name: string;
  role: string;
};

export type MyAuthStateType = {
  token: string;
  user: User | null;
};

const useAuthStore = create<MyAuthStateType>(() => {
  const getInitialState = () => {
    if (typeof window === "undefined") {
      return { token: "", user: null };
    }

    const storedAuth = localStorage.getItem("auth");

    if (!storedAuth) {
      return { token: "", user: null };
    }

    const ls = JSON.parse(storedAuth);
    return {
      token: ls.accessToken,
      user: ls.user,
    };
  };

  return getInitialState();
});

export default useAuthStore;

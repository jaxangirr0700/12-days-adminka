"use client";
import React from "react";
import LoginPage from "./LoginPage";
import Header from "./Header";
import Sidebar from "./Sidebar";
import useAuthStore from "@/store/MyAuthState";

function App({ children }: { children: React.ReactNode }) {
  const MyAuthState = useAuthStore();

  return (
    <div>
      {MyAuthState.token ? (
        <>
          <Header />
          <main className="h-[84vh] my-2 flex gap-4 ">
            <Sidebar />
            {children}
          </main>
        </>
      ) : (
        <LoginPage />
      )}
    </div>
  );
}

export default App;

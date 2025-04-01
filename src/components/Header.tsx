"use client";
import useAuthStore from "@/store/MyAuthState";
import {
  ExclamationCircleFilled,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "@ant-design/v5-patch-for-react-19";
import { Dropdown, MenuProps } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const MyAuthState = useAuthStore();
  const [user, setUser] = useState(MyAuthState.user);

  useEffect(() => {
    setUser(MyAuthState.user);
  }, [MyAuthState.user]);

  const items: MenuProps["items"] = [
    {
      label: user?.role,
      key: "1",
      icon: <UserOutlined />,
    },
    {
      label: user?.email,
      key: "2",
      icon: <ExclamationCircleFilled />,
    },
    {
      label: (
        <span
          onClick={() => {
            localStorage.removeItem("auth");
            useAuthStore.setState({ token: "", user: null });
          }}
        >
          Logout
        </span>
      ),
      key: "4",
      icon: <LogoutOutlined />,
      danger: true,
    },
  ];

  const menuProps = {
    items,
  };

  return (
    <header className="p-4 sm:p-6 flex items-center justify-between bg-green-500 text-white border-2 border-blue-700 rounded-xl shadow-lg">
      <h1 className="text-2xl sm:text-4xl font-bold italic">Logo</h1>

      <div className="flex items-center gap-2">
        <Image
          src="https://www.pngmart.com/files/21/Account-User-PNG-HD.png"
          width={40}
          height={40}
          className="w-10 h-10 sm:w-16 sm:h-16 rounded-full border-2 border-white transition-transform transform hover:scale-110"
          alt="Account image"
        />
        <Dropdown.Button menu={menuProps} className="w-full sm:w-auto">
          {user?.name || "User"}
        </Dropdown.Button>
      </div>
    </header>
  );
}

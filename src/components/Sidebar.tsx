"use client";
import {
  FileOutlined,
  FolderOpenOutlined,
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  OrderedListOutlined,
  ProductFilled,
  UserOutlined,
} from "@ant-design/icons";
import { Menu, Button, Switch, MenuTheme } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(true);
  const [theme, setTheme] = useState<MenuTheme>("dark");
  const changeTheme = (value: boolean) => {
    setTheme(value ? "dark" : "light");
  };

  const menuItems = [
    {
      key: "/",
      icon: <HomeOutlined />,
      label: <Link href="/">Home</Link>,
    },
    {
      key: "/users",
      icon: <UserOutlined />,
      label: <Link href="/users">Users</Link>,
    },
    {
      key: "/products",
      icon: <FileOutlined />,
      label: <Link href="/products">Products</Link>,
    },
    {
      key: "/categories",
      icon: <ProductFilled />,
      label: <Link href="/categories">Categories</Link>,
    },
    {
      key: "/orders",
      icon: <OrderedListOutlined />,
      label: <Link href="/orders">Buyurtmalar</Link>,
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex  flex-col mb-2">
        <Button
          onClick={() => {
            setCollapsed(!collapsed);
          }}
          className="mb-2 bg-green-500 rounded-xl "
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <Switch
          checked={theme === "dark"}
          onChange={changeTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        />
      </div>
      <Menu
        theme={theme}
        className="h-full rounded-xl"
        inlineCollapsed={collapsed}
        style={{
          padding: 0,
          maxWidth: 150,
          height: "100%",
        }}
        selectedKeys={[pathname]}
        mode="inline"
        items={menuItems}
      />
    </div>
  );
}

"use client";
import useAuthStore from "@/store/MyAuthState";
import { useFetchData } from "@/utils/axiosData/getData";
import { Button, Table } from "antd";
import Image from "next/image";
import { useState } from "react";
import AddUsers from "./edits/AddUsers";
import EditUser from "./edits/EditUser";
import axios from "axios";

export type UserType = {
  id: number;
  name: string;
  email: string;
  password: string;
  image: string;
  role: string;
  createdAt: string;
};

type UserDatatype = {
  items: UserType[];
  message: string;
  page: number;
  total: number;
};

function UsersPage() {
  const MyAuthState = useAuthStore();
  const [AddOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [editUser, setEditUser] = useState<UserType | null>(null);
  const { data: userData } = useFetchData<UserDatatype>(`/app/users/`);

  const showDrawer = () => setAddOpen(true);
  const onClose = () => setAddOpen(false);
  const showDrawerEdit = () => setEditOpen(true);
  const onCloseEdit = () => setEditOpen(false);

  const user = userData?.items || [];

  return (
    <div className="flex flex-col items-center p-4">
      <div className="flex gap-2 items-center justify-center mb-4">
        <Button
          onClick={() => console.log(`Userlarning umumiy soni ${user.length}`)}
        >
          Umumiy son: {user.length}
        </Button>
      </div>

      <div className="flex flex-col my-5 w-full">
        <AddUsers onClose={onClose} open={AddOpen} showDrawer={showDrawer} />
        <EditUser
          // showDrawerEdit={showDrawerEdit}
          onCloseEdit={onCloseEdit}
          open={editOpen}
          user={editUser}
        />
        <div style={{ overflowX: "auto" }}>
          <Table
            columns={[
              {
                title: "ID",
                dataIndex: "id",
                render: (id, student) => (
                  <span
                    className="cursor-pointer"
                    onClick={() => {
                      setEditOpen(true);
                      setEditUser(student);
                    }}
                  >
                    {id}
                  </span>
                ),
              },
              {
                title: "Ismi",
                dataIndex: "name",
              },
              {
                title: "Email",
                dataIndex: "email",
                responsive: ["md"],
              },
              {
                title: "Photo",
                dataIndex: "image",
                render: (img: string, user: UserType) =>
                  img &&
                  (img.startsWith("http://") || img.startsWith("https://")) ? (
                    <Image
                      width={50}
                      height={50}
                      style={{ borderRadius: "10px" }}
                      src={img}
                      alt={user.name}
                    />
                  ) : (
                    <span>Mavjud emas</span>
                  ),
              },
              {
                title: "Roli",
                dataIndex: "role",
              },
              // {
              //   title: "Parol",
              //   dataIndex: "password",
              // },
              {
                title: "Saqlangan",
                dataIndex: "createdAt",
                render: (create) => {
                  const date = new Date(create);
                  return <span>{date.toLocaleString()}</span>;
                },
              },
              {
                title: "Delete",
                dataIndex: "id",
                render: (id) => {
                  return (
                    <Button
                      color="danger"
                      variant="filled"
                      onClick={() => {
                        axios
                          .delete(`https://nt.softly.uz/api/app/users/${id}`, {
                            headers: {
                              Authorization: `Bearer ${MyAuthState.token}`,
                            },
                          })
                          .then((res) => {
                            console.log(res);
                            window.location.reload();
                          })
                          .catch((e) => {
                            console.log(e);
                          })
                          .finally(() => {
                            console.log("");
                          });
                      }}
                    >
                      Delete
                    </Button>
                  );
                },
              },
            ]}
            dataSource={user.map((i) => ({ ...i, key: i.id }))}
            pagination={{ pageSize: 5 }}
            scroll={{ x: true }}
          />
        </div>
      </div>
    </div>
  );
}

export default UsersPage;

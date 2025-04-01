"use client";
import useAuthStore from "@/store/MyAuthState";
import { Button, Drawer, Form, Input, Radio } from "antd";
import { useEffect, useState } from "react";
import { UserType } from "../page";
import { PostData } from "@/utils/axiosData/postData";

function EditUser({ user, onCloseEdit, open }: any) {
  const MyAuthState = useAuthStore();
  const [initialValues, setInitialValues] = useState<UserType | null>(null);

  useEffect(() => {
    if (user) {
      setInitialValues(user);
    }
  }, [user]);

  if (!initialValues) return null;

  return (
    <Drawer
      title="Foydalanuvchini tahrirlash"
      width={500}
      onClose={onCloseEdit}
      open={open}
      destroyOnClose
    >
      <Form
        initialValues={initialValues}
        onFinish={(values: UserType) => {
          PostData(`users/${user?.id}`, values);
          onCloseEdit();
        }}
      >
        <Form.Item
          label="Ismi"
          name="name"
          rules={[{ required: true, message: "Ism kiritilmadi!!!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Email kiritilmadi!!!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Parol"
          name="password"
          rules={[
            { required: true, message: "Parol kiritilmadi!!!" },
            {
              min: 6,
              message: "Parol kamida 6 ta belgidan iborat bo'lishi kerak!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item label="Rasm" name="image">
          <Input />
        </Form.Item>
        <Form.Item
          label="Roli"
          name="role"
          rules={[{ required: true, message: "Roli kiritilmadi!!!" }]}
        >
          <Radio.Group>
            <Radio value="customer">Customer</Radio>
            <Radio value="admin">Admin</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Saqlash
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
}

export default EditUser;

(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_cdf653d4._.js", {

"[project]/src/utils/axiosData/getData.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useFetchData": (()=>useFetchData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$MyAuthState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/MyAuthState.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function useFetchData(apiEndPoint) {
    _s();
    const MyAuthState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$MyAuthState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // Yagona ob'ekt sifatida
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFetchData.useEffect": ()=>{
            const fetchData = {
                "useFetchData.useEffect.fetchData": async ()=>{
                    try {
                        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`https://nt.softly.uz/api${apiEndPoint}`, {
                            headers: {
                                Authorization: `Bearer ${MyAuthState.token}`
                            }
                        });
                        setData(res.data);
                    } catch (e) {
                        console.error(e);
                    }
                }
            }["useFetchData.useEffect.fetchData"];
            fetchData();
        }
    }["useFetchData.useEffect"], [
        apiEndPoint,
        MyAuthState.token
    ]);
    return {
        data
    };
}
_s(useFetchData, "JbZiu+alYp9KTXQPouc+z7ntRz0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$MyAuthState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/products/edits/AddProduct.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// import useAuthStore from "@/store/MyAuthState";
// import { PlusOutlined } from "@ant-design/icons";
// import {
//   Button,
//   ConfigProviderProps,
//   Drawer,
//   Form,
//   Input,
//   Radio,
//   RadioChangeEvent,
// } from "antd";
// import FormItem from "antd/es/form/FormItem/index.js";
// import axios from "axios";
// import { useEffect, useState } from "react";
// type SizeType = ConfigProviderProps["componentSize"];
// function AddUsers({ onClose, open, showDrawer }: any) {
//   const MyAuthState = useAuthStore();
//   const [size, setSize] = useState<SizeType>("middle");
//   const handleChange = (value: string | string[]) => {
//     console.log(`Selected: ${value}`);
//   };
//   const handleSizeChange = (e: RadioChangeEvent) => {
//     setSize(e.target.value);
//   };
//   return (
//     <>
//       <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
//         Foydalanuvchi qo'shish
//       </Button>
//       <Drawer
//         title="Yangi Mahsulot qo'shish"
//         width={500}
//         onClose={onClose}
//         open={open}
//         styles={{
//           body: {
//             paddingBottom: 80,
//           },
//         }}
//         destroyOnClose
//       >
//         <Form
//           initialValues={{
//             name: "Jaxangir",
//             email: "jaxangirr0700@gmail.com",
//             password: "070000",
//             image: "Img",
//             role: "customer",
//           }}
//           onFinish={(values) => {
//             axios
//               .post(
//                 `https://nt.softly.uz/api/app/users`,
//                 values,
//                 { headers: { Authorization: `Bearer ${MyAuthState.token}` } }
//               )
//               .then((res) => {
//                 console.log(res);
//               })
//               .catch((e) => {
//                 console.log(e);
//               });
//           }}
//         >
//           <FormItem
//             label="Ismi"
//             name="name"
//             rules={[{ required: true, message: "Ism kiritilmadi!!!" }]}
//           >
//             <Input />
//           </FormItem>
//           <FormItem
//             label="Email"
//             name="email"
//             rules={[{ required: true, message: "Email kiritilmadi!!!" }]}
//           >
//             <Input />
//           </FormItem>{" "}
//           <FormItem
//             label="Parol"
//             name="password"
//             rules={[
//               { required: true, message: "Parol kiritilmadi!!!" },
//               {
//                 min: 6,
//                 message: "Parol kamida 6 ta belgidan iborat bo'lishi kerak!",
//               },
//             ]}
//           >
//             <Input.Password />
//           </FormItem>
//           <FormItem
//             label="Rasm"
//             name="image"
//             rules={[{ required: true, message: "Rasm kiritilmadi!!!" }]}
//           >
//             <Input />
//           </FormItem>{" "}
//           <FormItem
//             label="Roli"
//             name="role"
//             rules={[{ required: true, message: "Roli kiritilmadi!!!" }]}
//           >
//             <Radio.Group value={size} onChange={handleSizeChange}>
//               <Radio.Button value="customer">Customer</Radio.Button>
//               <Radio.Button value="admin">Admin</Radio.Button>
//             </Radio.Group>
//           </FormItem>
//           <FormItem>
//             <Button type="primary" htmlType="submit">
//               Submit
//             </Button>
//           </FormItem>
//         </Form>
//       </Drawer>
//     </>
//   );
// }
// export default AddUsers;
__turbopack_context__.s({});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/users/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$MyAuthState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/MyAuthState.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$axiosData$2f$getData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/axiosData/getData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/button/index.js [app-client] (ecmascript) <locals> <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$table$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/table/index.js [app-client] (ecmascript) <export default as Table>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$edits$2f$AddProduct$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/products/edits/AddProduct.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function UsersPage() {
    _s();
    const MyAuthState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$MyAuthState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const [AddOpen, setAddOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editOpen, setEditOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [EditStudent, setEditStudent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { data: userData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$axiosData$2f$getData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFetchData"])(`/app/users`);
    const showDrawer = ()=>{
        setAddOpen(true);
    };
    const onClose = ()=>{
        setAddOpen(false);
    };
    const user = userData?.items || [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 items-center justify-center mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                    onClick: ()=>console.log(`Userlarning umumiy soni ${user.length}`),
                    children: [
                        "Umumiy son: ",
                        user.length
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/users/page.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/users/page.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col my-5 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$edits$2f$AddProduct$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onClose: onClose,
                        open: AddOpen,
                        showDrawer: showDrawer,
                        s: true
                    }, void 0, false, {
                        fileName: "[project]/src/app/users/page.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            overflowX: "auto"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$table$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__["Table"], {
                            columns: [
                                {
                                    title: "ID",
                                    dataIndex: "id",
                                    render: (id, student)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "cursor-pointer",
                                            onClick: ()=>{
                                                setEditOpen(true);
                                                setEditStudent(student);
                                            },
                                            children: id
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/users/page.tsx",
                                            lineNumber: 63,
                                            columnNumber: 19
                                        }, void 0)
                                },
                                {
                                    title: "Email",
                                    dataIndex: "email",
                                    responsive: [
                                        "md"
                                    ]
                                },
                                {
                                    title: "Photo",
                                    dataIndex: "image",
                                    render: (img, user)=>img ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            width: 40,
                                            height: 40,
                                            src: img,
                                            alt: user.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/users/page.tsx",
                                            lineNumber: 84,
                                            columnNumber: 21
                                        }, void 0) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Mavjud emas"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/users/page.tsx",
                                            lineNumber: 86,
                                            columnNumber: 21
                                        }, void 0)
                                },
                                {
                                    title: "Roli",
                                    dataIndex: "role"
                                },
                                {
                                    title: "Ismi",
                                    dataIndex: "name"
                                },
                                {
                                    title: "Saqlangan",
                                    dataIndex: "createdAt",
                                    render: (create)=>{
                                        const date = new Date(create);
                                        const options = {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                            hour: "2-digit",
                                            minute: "2-digit",
                                            second: "2-digit",
                                            hour12: false
                                        };
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: date.toLocaleString(undefined, options)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/users/page.tsx",
                                            lineNumber: 111,
                                            columnNumber: 26
                                        }, void 0);
                                    }
                                }
                            ],
                            dataSource: user.map((i)=>({
                                    ...i,
                                    key: i.id
                                })),
                            pagination: {
                                pageSize: 5
                            },
                            scroll: {
                                x: true
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/users/page.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/users/page.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                        color: "danger",
                        type: "text",
                        onClick: ()=>console.log("Hozircha hammasini o'chirish ishlamaydi !!!"),
                        children: "Hammasini ochirish"
                    }, void 0, false, {
                        fileName: "[project]/src/app/users/page.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/users/page.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/users/page.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(UsersPage, "vykKxmrxD8GFRThxtck0tDXQUOE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$MyAuthState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$axiosData$2f$getData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFetchData"]
    ];
});
_c = UsersPage;
const __TURBOPACK__default__export__ = UsersPage;
var _c;
__turbopack_context__.k.register(_c, "UsersPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_cdf653d4._.js.map
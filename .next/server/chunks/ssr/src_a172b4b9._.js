module.exports = {

"[project]/src/utils/axiosData/getData.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useFetchData": (()=>useFetchData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$MyAuthState$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/MyAuthState.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function useFetchData(apiEndPoint) {
    const MyAuthState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$MyAuthState$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchData = async ()=>{
            try {
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`https://nt.softly.uz/api${apiEndPoint}`, {
                    headers: {
                        Authorization: `Bearer ${MyAuthState.token}`
                    }
                });
                setData(res.data);
            } catch (e) {
                setError(e.message);
                console.error(e);
            }
        };
        fetchData();
    }, [
        apiEndPoint,
        MyAuthState.token
    ]);
    return {
        data,
        error
    };
}
}}),
"[project]/src/app/products/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$axiosData$2f$getData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/axiosData/getData.ts [app-ssr] (ecmascript)");
"use client";
;
;
function Page() {
    const { data: users, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$axiosData$2f$getData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFetchData"])(`/app/users`);
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                "Xatolik: ",
                error
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/products/page.tsx",
            lineNumber: 7,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "Foydalanuvchilar"
            }, void 0, false, {
                fileName: "[project]/src/app/products/page.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                children: users.map((user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: user.name
                    }, user.id, false, {
                        fileName: "[project]/src/app/products/page.tsx",
                        lineNumber: 15,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/products/page.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/products/page.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = Page;
 // "use client";
 // import AddStudent from "@/app/students/edits/AddStudent";
 // import DeleteStudents from "@/app/students/edits/DeleteStudents";
 // import EditStudents from "@/app/students/edits/EditStudents";
 // import useGlobalStore from "@/store/my-store";
 // import { ProductTypes } from "@/types";
 // import { Button, Switch, Table } from "antd";
 // import { useState } from "react";
 // import AddProduct from "./edits/AddProduct";
 // import EditProducts from "./edits/EditProduct";
 // import DeleteProducts from "./edits/DeleteProducts";
 // function SrudentsPage() {
 //   const state = useGlobalStore();
 //   //   console.log(state);
 //   const [AddOpen, setAddOpen] = useState(false);
 //   const [editOpen, setEditOpen] = useState(false);
 //   const [EditStudent, setEditStudent] = useState({});
 //   const [deleteStudent, setDeleteStudent] = useState({});
 //   const showDrawer = () => {
 //     setAddOpen(true);
 //   };
 //   const showDrawerEdit = () => {
 //     setEditOpen(true);
 //   };
 //   const onClose = () => {
 //     setAddOpen(false);
 //   };
 //   const onCloseEdit = () => {
 //     setEditOpen(false);
 //   };
 //   return (
 //     <div className="flex flex-col items-center">
 //       {/* {sum} */}
 //       <div className="flex gap-2 items-center justify-center  ">
 //         <Button>Umumiy son: {state.products.length}</Button>
 //         <Button>
 //           Faollar:
 //           {
 //             state.products.filter((item: any) => {
 //               return item.active;
 //             }).length
 //           }
 //         </Button>
 //         <Button>
 //           Nofaollar:{" "}
 //           {state.products.reduce((count: any, item: any) => {
 //             return !item.active ? count + 1 : count;
 //           }, 0)}
 //         </Button>
 //       </div>
 //       <div className="flex flex-col my-5">
 //         <AddProduct onClose={onClose} open={AddOpen} showDrawer={showDrawer} />
 //         <EditProducts
 //           editOpen={editOpen}
 //           showDrawerEdit={showDrawerEdit}
 //           onCloseEdit={onCloseEdit}
 //           EditStudent={EditStudent}
 //           setEditStudent={setEditStudent}
 //         />
 //         <Table
 //           columns={[
 //             {
 //               title: "ID",
 //               dataIndex: "id",
 //               render: (id: any, student, s) => {
 //                 return (
 //                   <span
 //                     className=" cursor-pointer "
 //                     onClick={() => {
 //                       setEditOpen(true);
 //                       setEditStudent(student);
 //                     }}
 //                   >
 //                     {id}
 //                   </span>
 //                 );
 //               },
 //             },
 //             {
 //               title: "Mahsulot Nomi",
 //               dataIndex: "name",
 //             },
 //             {
 //               title: "narxi",
 //               dataIndex: "price",
 //             },
 //             {
 //               title: "Categoriyasi",
 //               dataIndex: "categorieId",
 //               render: (group_id) => {
 //                 const group = state.categories.find((f) => {
 //                   return f.id === group_id;
 //                 });
 //                 return group?.name;
 //               },
 //             },
 //             {
 //               title: "Active",
 //               dataIndex: "active",
 //               render: (v, studentt: any) => {
 //                 return (
 //                   <div className="flex gap-1 items-center">
 //                     <Switch
 //                       checked={v}
 //                       onChange={(checked) => {
 //                         const localStudent: ProductTypes[] = JSON.parse(
 //                           localStorage.getItem("products") || "[]"
 //                         );
 //                         const new_students = localStudent.map((item) => {
 //                           if (item.id === studentt.id) {
 //                             return {
 //                               ...item,
 //                               key: item.id,
 //                               active: checked,
 //                             };
 //                           }
 //                           return item;
 //                         });
 //                         console.log(new_students);
 //                         localStorage.setItem(
 //                           "products",
 //                           JSON.stringify(new_students)
 //                         );
 //                         useGlobalStore.setState({ products: new_students });
 //                       }}
 //                     />
 //                     <DeleteProducts
 //                       studentt={studentt}
 //                       setDeleteStudent={setDeleteStudent}
 //                       deleteStudent={deleteStudent}
 //                     />
 //                   </div>
 //                 );
 //               },
 //             },
 //           ]}
 //           dataSource={state.products.map((i: any) => {
 //             return {
 //               ...i,
 //               key: i.id,
 //             };
 //           })}
 //         />
 //         <Button
 //           color="danger"
 //           type="text"
 //           variant="text"
 //           onClick={() => {
 //             if (window.confirm("Hammasini o'chirishni tasdiqlaysizmi?")) {
 //               localStorage.clear();
 //               alert("Hammasi o'chirildi!");
 //             }
 //             //ha gptdan oldim windowni
 //           }}
 //         >
 //           Hammasini ochirish{" "}
 //         </Button>
 //       </div>
 //     </div>
 //   );
 // }
 // export default SrudentsPage;
}}),

};

//# sourceMappingURL=src_a172b4b9._.js.map
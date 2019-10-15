/** @format */

const menuList = [
    {
        title: "个人信息",
        key: "/crm/personal",
        type: "user",
        children: [
            {
                title: "信息更新",
                key: "/crm/updateInfor",
            },
            {
                title: "修改密码",
                key: "/crm/ChangPW",
            },
        ],
    },
    {
        title: "交易信息",
        key: "/crm/Deal",
        type: "user",
        children: [
            {
                title: "交易列表",
                key: "/crm/DealList",
            },
            {
                title: "交易详情",
                key: "/crm/DealInfor",
            },
        ],
    },
    {
        title: "用户管理",
        key: "/crm/usermanage",
        type: "user",
        children: [
            {
                title: "用户列表",
                key: "/crm/UserList",
            },
            {
                title: "用户详情",
                key: "/crm/UserInfor",
            },
        ],
    },
]
export default menuList

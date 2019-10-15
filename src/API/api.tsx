/** @format */
import {useEffect} from "react"
import axios from "axios"

export default function getCustomerList() {
    axios.get("https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList").then(res => {
        console.log(res)
    })
}

import {useEffect, useState} from 'react'
import { userApi } from '../api/userApi'
export const useUser = () => {
    const [users, setUsers] = useState([])

useEffect(() => {
  getUsers()
}, []) // [] dependencias


const getUsers = async () => {
    const response = await userApi.get('https://reqres.in/api/users')
    setUsers(response.data.data);
    console.log(response.data.data);
}
return{
    users
}
}
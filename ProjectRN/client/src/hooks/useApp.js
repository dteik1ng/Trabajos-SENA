import { useEffect, useState } from "react";
import {}

const App = () => {
    const [backenData, setBackenData] = useState([{}]);
  
    useEffect(() => {
      fetch("/api")
        .then((response) => response.json())
        .then((data) => setBackenData(data));
    }, [])

    const getUsers = async () => {
        const response = await userApi.get('')
        setUsers(response.data.data);
        console.log(response.data.data);
    }
    return{
        users
    }
}
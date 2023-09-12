import {useEffect, useState} from 'react';
import { UsuariosApi } from '../api/UsuariosApi';

export const useUsuarios = () => {
    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        getUsuarios()
    }, []) 
    

    const getUsuarios = async () => {
        const response = await UsuariosApi.get('https://jsonplaceholder.typicode.com/users');
        setUsuarios(response.data);
        console.log(setUsuarios);
    }


    return {
        usuarios
    }
}
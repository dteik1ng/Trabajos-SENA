import React from 'react';
import {useUsuarios} from '../hooks/useUsuarios';

const Usuarios = () => {

    const {usuarios} = useUsuarios();

  return (
    <div className='mt-5'>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    usuarios.map((usuarios, i) =>(
                        <tr className='table-primary' key={i}>
                            <td>{usuarios.id}</td>
                            <td>{usuarios.name}</td>
                            <td>{usuarios.username}</td>
                            <td>{usuarios.email}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Usuarios

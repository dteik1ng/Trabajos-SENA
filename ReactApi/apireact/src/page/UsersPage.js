import React from 'react'
import { useUser } from '../hooks/useUser'


const UsersPage = () => {

    const {users} = useUser();

  return (
    <div className='mt-5'>
        <table className ='table table-striped'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>EMAIL</th>
                    <th>NAME</th>
                    <th>AVATAR</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user, i) => (
                        <tr key={i}>
                            <td>{user.id}</td>
                            <td>{user.email}</td>
                            <td>{user.first_name} {user.last_name}</td>
                            <td>
                                <img src={user.avatar}
                                className='img-thumbail' style={{width: 80}}/>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default UsersPage

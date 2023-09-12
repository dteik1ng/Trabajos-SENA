import React from "react";
import {useApp} from '..hooks/useApp'

const Api = () => {
    const {users, backenData} = useApp();
}

return (
    <div>
      {typeof backenData.users === "undefined" ? (
        <p>Loading...</p>
      ) : (
        backenData.users.map((user, i) => (
          <div className="table-responsive">
            <table className="table table-striped ">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Bio</th>
                </tr>
              </thead>
              <tbody>
                <tr key={i}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td>{user.bio}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ))
      )}
    </div>
)
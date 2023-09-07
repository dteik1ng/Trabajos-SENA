import React, { useEffect, useState } from "react";

const App = () => {
  const [backenData, setBackenData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => setBackenData(data));
  }, []);

  return (
    <div>
      {
      (typeof backenData.users === "undefined") ? 
      (<p>Loading...</p>) : 
      (backenData.users.map((user, i) =>
      <div className='table-responsive'>
        <table className ='table table-striped '>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>username</th>
                </tr>
            </thead>
            <tbody>
                        <tr key={i}>
                            <td>{user.id}</td>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.email}</td>
                            <td>{user.gender}</td>
                            <td>{user.username}</td>
                        </tr>
            </tbody>
        </table>
    </div>
      ))
      }
    </div>
  );
};

export default App;

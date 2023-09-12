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
      {typeof backenData.users === "undefined" ? (
        <p>Loading...</p>
      ) : (
          <div className="mt-3">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {backenData.users.map((users, i) => (
                  <tr key={i} className="table-primary">
                    <td>{users.id}</td>
                    <td>{users.username}</td>
                    <td>{users.email}</td>
                    <td>{users.bio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
      )}
    </div>
  );
};

export default App;

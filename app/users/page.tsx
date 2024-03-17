import React from 'react'


interface User {
    id: number;
    name: string;
    email: string;
}
const usersPage = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();

  return (
      <>
      <div className={"navbar-end"}>
        <a href="/new">new</a>
        <a>pruebas</a>
      </div>
      <h1>Users</h1>
      <table className={"table table-bordered"}>
          <thead>
              <tr>
                  <th>Name</th>
                  <th>Email</th>
              </tr>
          </thead>
          <tbody>
              {users.map(user => {
                  return (
                      <tr key={user.id}>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                      </tr>
                  )
              })}
          </tbody>
      </table>
      </>
  )
}

export default usersPage
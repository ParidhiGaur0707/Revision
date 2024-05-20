import React, {useState, useEffect} from 'react';
export default function Recommended() {
    const [users, setUsers]=useState([])
    useEffect(()=>{
        fetch("https://freetestapi.com/api/v1/books")
        .then(response=>response.json())
        .then(json=>setUsers(json))
    },[])
  return (
    <div>
      <h1 align="center">Recommended Books</h1>
      <div className="container-fluid">
        <table className="table table-bordered">
            <thead className="table-dark">
                <tr align="center">
                    <th>Id</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Publication Year</th>
                    <th>Genre</th>
                    <th>Description</th>
                </tr>
            </thead>
            {users.map(user=>(
                <tr>
                    <td>{user.id}</td>
                    <td>{user.title}</td>
                    <td>{user.author}</td>
                    <td>{user.publication_year}</td>
                    <td>{user.genre}</td>
                    <td>{user.description}</td>
                </tr>
            ))}
        </table>
      </div>
    </div>
  )
}

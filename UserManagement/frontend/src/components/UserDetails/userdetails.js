import React, { useState, useEffect } from 'react'
import NavBar from "../Nav/NavBar";
import axios from "axios";
import User from "../User/User";

const URL = "http://localhost:5000/users";

const fetchHandler = async () =>{
  return await axios.get(URL).then((res) => res.data);
}

function UserDetails() {
  const [users, setUsers] = useState([]);
  useEffect(()=> {
    fetchHandler().then((data) => setUsers(data.users))
  },[])
  return (
    <div>
      <NavBar />
      <h1> Show User details</h1>
      <div>
        {users && users.map((user, i) =>(
          <div key={i}>
            <User user={user} setUsers={setUsers}/>
            </div>
        ))}
      </div>
    </div>
  )
}

export default UserDetails;






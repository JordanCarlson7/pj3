import React, { useState } from "react";
import Card from "../src/components/UI/Card";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {

  const [usersList, setUsers] = useState([]);

  const addUserHandler = (username, age) => {
    setUsers((prevUsersList) => {
      return [...prevUsersList, { name: username, age: age, id: Math.random().toString() }];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;

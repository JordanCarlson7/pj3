import React, { Fragment, useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    //validate
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'No non-empty values.'
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: 'Invalid age',
        message: 'must be greater than 0'
      })
      return;
    }
    //forwarding data to app.js into array state userList
    props.onAddUser(username, age);
    
    setUsername('');
    setAge('');
  };

  

  // Update user input state
  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };
  
  const ErrorHandler = () => {
    setError(null);
  }
  
  return (
    <Fragment>
    {error && <ErrorModal title={error.title} message={error.message} onError={ErrorHandler}/>}
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="userName">UserName</label>
        <input id="userName" type="text" value={username} onChange={usernameChangeHandler} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" value={age} onChange={ageChangeHandler} />
        <Button type="submit">Add User</Button>
      </form>
     
    </Card>
    </Fragment>
  );
};

export default AddUser;

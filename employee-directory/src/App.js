// eslint-disable-next-line
// this is to disable eslint
/* eslint-disable */ 

import Header from "./components/Heading/index";
import Table from "./components/Table/index";
import Container from "./components/Container/index";
import { useState, useEffect } from "react";
import axios from "axios";
import TableRow from "./components/Row";



function App() {
  const [users, setUsers] = useState([]);
  const [input, setInput] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [sortedUsers, setSortedUsers] = useState([]);



  useEffect(() => {
    async function fetch() {
      const response = await axios.get(
        "https://randomuser.me/api/?results=20&nat=us"
      );
      loadUsers(response);
    }
    fetch();
  }, []);



  function loadUsers(response) {
    console.log(response.data.results);
    setUsers(response.data.results);
  }



  //Received assistance from Dan Cintron with this
  function sortUsers() {
    let sorted;

    if (input) {
      sorted = filteredUsers.sort((a, b) => {
        return a.name.first.localeCompare(b.name.first);
      });
    } else {
      sorted = users.sort((a, b) => {
        return a.name.first.localeCompare(b.name.first);
      });
    }
    
    console.log(sorted)
    setSortedUsers(sorted);
  }



  useEffect(() => {
    if (input) {
      const filteredUsers = users.filter((user) => {
        if (
          user.name.first.toLowerCase().includes(input) ||
          user.name.last.toLowerCase().includes(input) ||
          user.name.first.includes(input) ||
          user.name.last.includes(input) 
        ) {
          return user;
        }
      });
      setFilteredUsers(filteredUsers);
    }
  }, [input, users]);



  return (
    <div>
      <Header input={input} setInput={setInput}></Header>
      <Container>
        <Table sorted={sortedUsers} sort={sortUsers}>
          <TableRow users={!input ? users : filteredUsers}></TableRow>
        </Table>
      </Container>
    </div>
  );
}

export default App;
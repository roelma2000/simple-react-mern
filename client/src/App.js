import './App.css';
import { useState, useEffect } from "react";
import Axios from"axios";

function App() {
  const [listOfUsers,setlistOfUsers] = useState([]);
  const [id,setId] = useState(0);
  const [name,setName] = useState("");
  const [coursename,setcoursename] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
        setlistOfUsers(response.data)
    })
  }, []);

  const addStudent = () => {
    Axios.post("http://localhost:3001/CreateUser",{
      id,
      name,
      coursename, 
    }).then((response) => {
       //alert("New Student Added!");
       setlistOfUsers([...listOfUsers, {
        id,
        name,
        coursename, 
      }]);
    });
  }

  return (
    <div className="App">
      <div className="displayUsers">
        { listOfUsers.map((student) => {
          return (
            <div>
               <h2>ID: {student.id}</h2>
               <h2>Name: {student.name}</h2>
               <h2>Course: {student.coursename}</h2>
            </div>
          );
        })

        }
        <div>
          <input type="number" placeholder='ID Number...' onChange={(event) => {
            setId(event.target.value);
          } }/>
          <input type="text" placeholder='Full Name...' onChange={(event) => {
            setName(event.target.value);
          } }/>
          <input type="text" placeholder='Your Course...' onChange={(event) => {
            setcoursename(event.target.value);
          } }/>
          <button onClick={addStudent}>Add Student</button>
        </div>
      </div>
    </div>
  );
}

export default App;

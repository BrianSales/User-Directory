import {useEffect, useState} from "react";

function App() {
  const [employees, setEmployees] = useState([])
  useEffect(()=>{
    fetch("https://randomuser.me/api/?results=30")
    .then(res=>res.json())
    .then(data =>{
      console.log(data.results)
      setEmployees(data.results)

    })
  },[]) 
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>email</th>
            <th>age</th>
            <th>picture</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index)=>{
            return <tr>
              <td>{employee.name.first} {employee.name.last}</td>
              <td><a href={"mailto:" + employee.email}>{employee.email}</a></td>
              <td>{employee.dob.age}</td>
              <td><img src= {employee.picture.thumbnail}/></td>
            </tr>

          })}
        </tbody>

      </table>
    </div>
  );
}

export default App;

import {useEffect, useState} from "react";

function App() {
  const [employees, setEmployees] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [sortAsc, setSortAsc] = useState(true)
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
      <input value={searchTerm} onChange={(event)=>{setSearchTerm(event.target.value)}}type="text"/>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>email</th>
            <th onClick={(event)=>{setSortAsc(!sortAsc)}}>age</th>
            <th>picture</th>
          </tr>
        </thead>
        <tbody>
          {employees
          .filter((employee)=>{
            return employee.email.includes(searchTerm)

          })
          .sort((employeeA, employeeB)=>{
            //added a ternary statement to sort employee age
            return (employeeA.dob.age - employeeB.dob.age) * (sortAsc?1:-1)

            
          })
          .map((employee, index)=>{
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

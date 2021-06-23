import {useEffect, useState} from "react";

function App() {
  useEffect(()=>{
    fetch("https://randomuser.me/api/?results=50")
    .then(res=>res.json())
    .then(data =>{
      console.log(data)
    })
  }) 
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
        <tbody></tbody>

      </table>
    </div>
  );
}

export default App;

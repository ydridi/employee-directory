import React from "react";
import "./style.css";

function SearchResults(props) {
  return (props.employees.map(employee => (
        <div className="row" key={employee.id}>
        <div className="col img-fluid" >
          <img alt={employee.name} src={employee.image} /></div>
        <div className="col">{employee.name}</div>
        <div className="col">{employee.phone}</div>
        <div className="col">{employee.email}</div>
        <div className="col">{employee.dob}</div>
       </div>
      )));
}

export default SearchResults;
import React from "react";
import "./style.css";

function EmployeeRef(props) {
  return (
    <tr>
      <th scope="row"><img alt={props.name}  src={props.image} /></th> 
      <th scope="row"><img alt={props.name}  src={props.name} /></th> 
      <th scope="row"><img alt={props.name}  src={props.phone} /></th>
      <th scope="row"><img alt={props.name}  src={props.email} /></th>
      <th scope="row"><img alt={props.name}  src={props.dob} /></th>
      <td >{props.image}</td>
      <td >{props.name}</td>
      <td >{props.phone}</td>
      <td >{props.email}</td>
      <td >{props.dob}</td>
    </tr>
  );
}

export default EmployeeRef;
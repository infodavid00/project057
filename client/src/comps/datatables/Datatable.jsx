import { useState, useEffect } from "react";
import "../dashboard/dashboard.css";
import "./datatable.css";
import { makeRequest } from "../../etc/network";
import { TailSpin } from 'react-loader-spinner';

export default function Datatable() {
  function formatDate(date) {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options).replace(/,/g, '');
  }
  const [tables, setTables] = useState("L"); 
  useEffect(()=> {
     makeRequest("/user", "GET", setTables);
  }, []);
  
  return (
    <div id="dashboard-sectionA-body" className="datatable-sectionA-body">
      <div
        className="dashboard-charts-box datatable-sectionA-table"
        style={{ height: "auto" }}
      >
        <h1 id="datatable-sectionA-header">
          Accepted Invites and depositors INFO
        </h1>
        {/* header */}
        {typeof tables === "object" ? <table id="datatable-sectionA-table-container">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Deposited Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          {(tables?.referedINFO ?? []).map((element, index) => (
            <tbody key={index}>
              <tr>
                <td>{element.fname}</td>
                <td>{element.lname}</td>
                <td>{element.email}</td>
                <td>€{element.deposit}</td>
                <td>{formatDate(new Date(element.date))}</td>
              </tr>
            </tbody>
          ))}
        </table> : tables === "L" ? <TailSpin width={20} height={20} /> : <div></div>}
        {/* table */}
      </div>
    </div>
  );
}

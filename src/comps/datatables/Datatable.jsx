import "../dashboard/dashboard.css";
import "./datatable.css";

export default function Datatable() {
  const datatables = [
    {
      fname: "Alice",
      lname: "Smith",
      email: "alice.smith@example.com",
      da: "$123.45",
      date: "15 Feb 2024",
    },
    {
      fname: "Bob",
      lname: "Johnson",
      email: "bob.johnson@example.com",
      da: "$678.90",
      date: "23 Mar 2024",
    },
    {
      fname: "Carol",
      lname: "Williams",
      email: "carol.williams@example.com",
      da: "$234.56",
      date: "10 Apr 2024",
    },
    {
      fname: "David",
      lname: "Jones",
      email: "david.jones@example.com",
      da: "$789.01",
      date: "30 May 2024",
    },
    {
      fname: "Eva",
      lname: "Brown",
      email: "eva.brown@example.com",
      da: "$345.67",
      date: "12 Jun 2024",
    },
    {
      fname: "Frank",
      lname: "Davis",
      email: "frank.davis@example.com",
      da: "$890.12",
      date: "22 Jul 2024",
    },
    {
      fname: "Grace",
      lname: "Miller",
      email: "grace.miller@example.com",
      da: "$456.78",
      date: "8 Aug 2024",
    },
    {
      fname: "Henry",
      lname: "Wilson",
      email: "henry.wilson@example.com",
      da: "$123.45",
      date: "19 Sep 2024",
    },
    {
      fname: "Ivy",
      lname: "Moore",
      email: "ivy.moore@example.com",
      da: "$678.90",
      date: "5 Oct 2024",
    },
  ];
  return (
    <div id="dashboard-sectionA-body" className="datatable-sectionA-body">
      <div className="dashboard-charts-box datatable-sectionA-table">
        <h1 id="datatable-sectionA-header">
          Accepted Invites and depositors INFO
        </h1>
        {/* header */}
        <table id="datatable-sectionA-table-container">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Deposited Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          {datatables.map((element, index) => (
            <tbody key={index}>
              <tr>
                <td>{element.fname}</td>
                <td>{element.lname}</td>
                <td>{element.email}</td>
                <td>{element.da}</td>
                <td>{element.date}</td>
              </tr>
            </tbody>
          ))}
        </table>
        {/* table */}
      </div>
    </div>
  );
}

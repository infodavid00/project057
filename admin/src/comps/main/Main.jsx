import { useState } from "react";
import Header from "../header/Header";
import "./main.css";
import * as XLSX from "xlsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Main() {
  const [isLoading, setIsLoading] = useState(false);
  const datatables = [
    {
      id: "axitrader-1626311",
      name: "Violeta Doda",
      mt4: "6335848",
      firstDeposit: "540",
      fdd: "10 Jan 2024",
      otherDeposit: "540",
      ldd: "11 Jan 2024",
    },
  ];

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];

    if (file && file.name.endsWith(".xlsx")) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        let json = XLSX.utils.sheet_to_json(worksheet);

        json = json.map((item) => {
          if (item["ADDITIONAL USERID"]) {
            const splitValue = item["ADDITIONAL USERID"].split(":")[1]?.trim();
            item["mt4"] = splitValue || item["ADDITIONAL USERID"];
            delete item["ADDITIONAL USERID"];
          }
          return item;
        });

        console.log(json);
        toast.success("File successfully converted to JSON!");

        // Show loader
        setIsLoading(true);

        // Simulate API request (replace this with your actual API call)
        setTimeout(() => {
          // Make your backend request here
          console.log("Sending JSON to backend...", json);

          // Hide loader after the request
          setIsLoading(false);
        }, 2000); // Simulated delay
      };

      reader.readAsArrayBuffer(file);
    } else {
      toast.error("Please upload a valid .xlsx file.");
    }
  };

  return (
    <>
      <div id="application-body">
        <Header title={"Reports"} />
        <div id="application-container">
          <div id="reports-body">
            <div id="reports-leadheader">
              <div>13 Shown Reports </div>
              <div>102 Total Reports </div>
              <div>Last update at 10/2/2020 at 10:20 pm </div>
              <button
                style={{
                  backgroundColor: "var(--panel-color)",
                  color: "white",
                  border: "none",
                }}
                onClick={() => document.getElementById("file-input").click()}
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "New report"}
              </button>
              <input
                type="file"
                id="file-input"
                style={{ display: "none" }}
                accept=".xlsx"
                onChange={handleFileUpload}
              />
              <button>Load more reports</button>
            </div>

            <div id="reports-table">
              <table id="reports-table-container">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>MT4</th>
                    <th>First Deposit</th>
                    <th>FDD</th>
                    <th>Other Deposits</th>
                    <th>LDD</th>
                  </tr>
                </thead>
                {datatables.map((element, index) => (
                  <tbody key={index}>
                    <tr>
                      <td>{element.id}</td>
                      <td>{element.name}</td>
                      <td>{element.mt4}</td>
                      <td>{element.firstDeposit}</td>
                      <td>{element.fdd}</td>
                      <td>{element.otherDeposit}</td>
                      <td>{element.ldd}</td>
                    </tr>
                  </tbody>
                ))}
              </table>
              {/* table */}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

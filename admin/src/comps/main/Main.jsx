import { useState, useEffect } from "react";
import Header from "../header/Header";
import "./main.css";
import * as XLSX from "xlsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TailSpin } from "react-loader-spinner";
import { BaseEndpoint, tokenVault } from "../../etc/network.jsx";
import Cookies from "js-cookie";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export default function Main() {
  const [isLoading, setIsLoading] = useState(false);
  const [reportsStats, setReportsStats] = useState({
    shownReports: 0,
    totalReports: "l",
    lastUpdate: "never",
  });
  const [datatables, setDatatables] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [loadHeader, shouldloadHeader] = useState(true);
  const [reports, setReports] = useState("");
  const [paginationIndex, setPaginationIndex] = useState(0);
  const [loadingMoreReports, setLoadingMoreReports] = useState(false);

  useEffect(() => {
    if (loadHeader !== false) {
    const fetchStats = async () => {
      setIsLoading(true);
      try {
        const token = Cookies.get(tokenVault);
        const response = await fetch(`${BaseEndpoint}/reports/stats`, {
          method: "GET",
          headers: {
            Pass: `${btoa(token)}`,
            "Content-Type": "application/json",
          },
        });

        if (response.status === 200) {
          const result = await response.json();
          let lastUpdateFormatted = "never";
          if (result?.data?.lu) {
            const lastUpdateDate = new Date(result.data.lu);
            lastUpdateFormatted = lastUpdateDate.toLocaleString("en-GB", {
               day: "2-digit",
               month: "short",
               year: "numeric",
               hour: "2-digit",
               minute: "2-digit",
            });
          }
          setReportsStats({
            shownReports: 0,
            totalReports: result?.data?.len || 0,
            lastUpdate: lastUpdateFormatted
          });
          setDataLoaded(true);
        } else {
          toast.error("Failed to fetch report stats.");
        }
      } catch (error) {
        toast.error("An unexpected error occurred while fetching stats.");
      } finally {
        setIsLoading(false);
        shouldloadHeader(false)
      }
    };

    fetchStats();
    }
  }, []);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];

    if (file && file.name.endsWith(".xlsx")) {
      const reader = new FileReader();

      reader.onload = async (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        let json = XLSX.utils.sheet_to_json(worksheet);

        json = json.map((item) => {
         if (item["ADDITIONAL USERID"]) {
          const splitValue = item["ADDITIONAL USERID"].split(":")[1]?.trim();
          item["mt4"] = splitValue || item["ADDITIONAL USERID"];
          if (item["mt4"].includes(",")) {
            item["mt4"] = item["mt4"].split(",")[0]; 
          }
            delete item["ADDITIONAL USERID"];
         }
         return item;
        });
        json = json.map((item) => {
          const i = item;
          if ((item["mt4"] ?? "").includes(","))
            i["mt4"] = item["mt4"].split(",")[0].trim()
          return i
        });

        toast.success("File successfully converted to JSON!");

        setIsLoading(true);

        try {
          const token = Cookies.get(tokenVault);
          const response = await fetch(`${BaseEndpoint}/reports`, {
            method: "POST",
            headers: {
              Pass: `${btoa(token)}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(json),
          });

          const result = await response.json();

          if (response.status === 200) {
            toast.success("Report successfully submitted!");
            setIsLoading(false);
            setTimeout(() => {
              window.location.reload(); // Reload the page only after the file is successfully uploaded
            }, 2000);
          } else {
            toast.error(`Error: ${result.message}`);
            setIsLoading(false); // Stop the loader if the response is not 200
          }
        } catch (error) {
          toast.error("An unexpected error occurred. Please try again later.");
          setIsLoading(false); // Stop the loader on error
        } 
      };

      reader.readAsArrayBuffer(file);
    } else {
      toast.error("Please upload a valid .xlsx file.");
    }
  };

  const fetchReports = async () => {
    const token = Cookies.get(tokenVault);
    if (!token) {
      navigate("/login");
      return;
    }
    if (paginationIndex !== 0) {
      setLoadingMoreReports(true);
    } 
    try {
      const response = await fetch(`${BaseEndpoint}/reports?size=50&page=${paginationIndex}`, {
        method: 'GET',
        headers: {
          'Pass': `${btoa(token)}`,
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 403) navigate("/login");
      else if (response.ok) {
        let data = await response.json();
        data = data.data;
        if (Array.isArray(data)) {
          setPaginationIndex(paginationIndex + 1);
          const newReportStats = {
              totalReports: reportsStats.totalReports, 
              lastUpdate: reportsStats.lastUpdate
          }
          newReportStats.shownReports = Array.isArray(reports) ? reports.length + data.length : data.length;
          setReportsStats(newReportStats);
          if (paginationIndex === 0) {
            setReports(data);
          } else {
            setReports([...reports, ...data]);
          }
        } else toast.info("No messages to show");
      } else {
        const error = await response.json();
        toast.error(`Error: ${error.message}`);
      }
    } catch (error) {
      toast.error(`Network Error: ${error.message}`);
    } finally {
      if (paginationIndex !== 0) setLoadingMoreReports(false);
    }
  };

  useEffect(()=> {
    if (loadHeader === false && reportsStats?.totalReports > 0) {
      fetchReports();
    } else setReports("N")
  }, [loadHeader])

  return (
    <>
      <div id="application-body">
        <Header title={"Reports"} />
        <div id="application-container">
          <div id="reports-body">
            <div id="reports-leadheader">
              {isLoading && loadHeader ? (
                <TailSpin height="20" width="20" color="white" />
              ) : (
                <>
                  <div>{reportsStats.shownReports} Shown Reports</div>
                  <div>{reportsStats.totalReports} Total Reports</div>
                  <div>
                    Last update at{" "}
                    {reportsStats.lastUpdate === "never"
                      ? "never"
                      : `${reportsStats.lastUpdate}`}
                  </div>
                  <button
                    style={{
                      backgroundColor: "var(--panel-color)",
                      color: "white",
                      border: "none",
                    }}
                    onClick={() =>
                      document.getElementById("file-input").click()
                    }
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
                  {dataLoaded && reportsStats.totalReports > 0 && reportsStats.totalReports !== reportsStats.shownReports && (
                    <button onClick={fetchReports}>Load more reports</button>
                  )}
                </>
              )}
            </div>

            <div id="reports-table">
              {reports && Array.isArray(reports) ?
               <table id="reports-table-container">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>MT4</th>
                    <th>First Deposit</th>
                    <th>FDD</th>
                    <th>Deposits</th>
                    <th>Deposit Count</th>
                  </tr>
                </thead>
                <tbody>
                  {reports.map((element, index) => (
                    <tr key={index}>
                      <td>{element["User ID"]}</td>
                      <td>{element["Customer Name"]}</td>
                      <td>{element["mt4"]}</td>
                      <td>€{element["First Deposit"]}</td>
                      <td>{element["First Deposit Date"] ? dayjs(new Date("First Deposit Date")).fromNow() :  "never"}</td>
                      <td>€{element["Deposits"]}</td>
                      <td>{element["Deposit Count"]}</td>
                    </tr>
                  ))}
                </tbody>
              </table> : reportsStats.totalReports === 0  ? (
                <div style={{ fontFamily: "poppins", marginTop: "2em"}}>No reports to show </div>
              ) : (
                <div style={{ marginTop: "2em", display: "flex",  justifyContent: "center", marginRight: "10em" }}>
                  <TailSpin height="20" width="20" color="white" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

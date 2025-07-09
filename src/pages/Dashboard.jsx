import React, { useState } from "react";
import { launchScan } from "../services/scanServices";
import ScanForm from "../components/ScanForm";
import SettingsPanel from "../components/SettingsPanel";
import ReportDownload from "../components/ReportDownload";
import ResultsTable from "../components/ResultsTable";
import ResultsChart from "../components/ResultsChart";

/**
 * Page principale du dashboard.
 */
const Dashboard = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fonction appelée lors du lancement d'un scan
  const handleStartScan = async (params) => {
    setLoading(true);
    const scanResults = await launchScan(params);
    setResults(scanResults);
    setLoading(false);
  };

  return (
    <div>
      <h1>Scanner UI</h1>
      <ScanForm onStartScan={handleStartScan} />
      <SettingsPanel />
      {loading ? (
        <p>Scan en cours...</p>
      ) : (
        <>
          <ResultsTable results={results} />
          <ResultsChart results={results} />
          <ReportDownload results={results} />
        </>
      )}
    </div>
  );
};

export default Dashboard;
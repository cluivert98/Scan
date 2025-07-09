import React from "react";

/**
 * Permet de télécharger les résultats du scan au format JSON.
 */
const ReportDownload = ({ results }) => {
  const handleDownload = () => {
    const blob = new Blob([JSON.stringify(results, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "scan-report.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <button onClick={handleDownload} disabled={!results || results.length === 0}>
      Télécharger le rapport
    </button>
  );
};

export default ReportDownload;
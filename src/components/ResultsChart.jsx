import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, BarElement, CategoryScale, LinearScale } from "chart.js";

// Enregistrement des composants nécessaires de Chart.js
Chart.register(BarElement, CategoryScale, LinearScale);

/**
 * Affiche un graphique des résultats du scan.
 */
const ResultsChart = ({ results }) => {
  const severityLevels = ["Low", "Medium", "High", "Critical"];
  const data = {
    labels: severityLevels,
    datasets: [
      {
        label: "Nombre de vulnérabilités",
        data: severityLevels.map(
          (level) => results.filter((r) => r.severity === level).length
        ),
        backgroundColor: [
          "#4caf50",
          "#ff9800",
          "#f44336",
          "#9c27b0",
        ],
      },
    ],
  };

  return (
    <div>
      <h2>Graphique des vulnérabilités</h2>
      <Bar data={data} />
    </div>
  );
};

export default ResultsChart;
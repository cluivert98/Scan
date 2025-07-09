import React from "react";

/**
 * Affiche les résultats du scan sous forme de tableau.
 */
const ResultsTable = ({ results }) => {
  if (!results || results.length === 0) {
    return <p>Aucun résultat à afficher.</p>;
  }

  return (
    <div>
      <h2>Résultats du scan</h2>
      <table>
        <thead>
          <tr>
            <th>Vulnérabilité</th>
            <th>Gravité</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {results.map((res, idx) => (
            <tr key={idx}>
              <td>{res.name}</td>
              <td>{res.severity}</td>
              <td>{res.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultsTable;
import React, { useState } from "react";

/**
 * Formulaire pour configurer et lancer un scan.
 */
const ScanForm = ({ onStartScan }) => {
  const [url, setUrl] = useState("");
  const [testType, setTestType] = useState("full");

  const handleSubmit = (e) => {
    e.preventDefault();
    onStartScan({ url, testType });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Lancer un scan</h2>
      <label>
        URL cible :
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
      </label>
      <label>
        Type de test :
        <select
          value={testType}
          onChange={(e) => setTestType(e.target.value)}
        >
          <option value="full">Complet</option>
          <option value="quick">Rapide</option>
        </select>
      </label>
      <button type="submit">Démarrer le scan</button>
    </form>
  );
};

export default ScanForm;
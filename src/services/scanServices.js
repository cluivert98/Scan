/**
 * Simule un appel API pour lancer un scan.
 * À remplacer par un vrai appel backend.
 */
export async function launchScan({ url, testType }) {
  // Simule un délai réseau
  await new Promise((res) => setTimeout(res, 1500));
  // Retourne des résultats fictifs
  return [
    {
      name: "SQL Injection",
      severity: "High",
      description: `Vulnérabilité détectée sur ${url}`,
    },
    {
      name: "XSS",
      severity: "Medium",
      description: `Cross-site scripting détecté sur ${url}`,
    },
    {
      name: "Sécurité des cookies",
      severity: "Low",
      description: `Cookies non sécurisés sur ${url}`,
    },
  ];
}
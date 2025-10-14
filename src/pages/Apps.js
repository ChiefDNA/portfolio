import React, { useState, useEffect } from "react";
import "../styles/Apps.css";

export default function Apps() {
  const [apps, setApps] = useState([]);
  const [selectedApp, setSelectedApp] = useState(null);
  const [activePlatform, setActivePlatform] = useState("android");

  useEffect(() => {
    fetch("/portfolio/data/apps.json")
      .then(res => res.json())
      .then(data => setApps(data))
      .catch(err => console.error("Error loading apps:", err));
  }, []);

  if (selectedApp) {
    const app = selectedApp;

    return (
      <div className="apps-page content">
        <button className="back-btn" onClick={() => setSelectedApp(null)}>← Back to Apps</button>
        <div className="app-detail">
          <h2>{app.name}</h2>
          <p className="short">{app.short}</p>

          <h4>{app.subtitle}</h4>
          <div className="platform-tabs">
            {app.platforms.map((p, i) => (
              <span
                key={i}
                className={`platform ${activePlatform.toLowerCase() === p.toLowerCase() ? "active" : ""}`}
                onClick={() => setActivePlatform(p.toLowerCase())}
              >
                {p}
              </span>
            ))}
          </div>

          {app.downloads[activePlatform] ? (
            <a href={app.downloads[activePlatform]} className="download-btn">Download for {activePlatform}</a>
          ) : (
            <p>No download available for this platform yet.</p>
          )}

          <div className="description">
            <p>{app.description}</p>
            <ul>
              {app.features?.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
            <p className="notes">{app.notes}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="apps-page">
      <h2>Apps</h2>
      <div className="cards-container">
        {apps.map(app => (
          <div
            key={app.id}
            className={`app-card ${app.short === "In development" ? "skeleton" : ""}`}
            onClick={() => app.short !== "In development" && setSelectedApp(app)}
          >
            <h3>{app.name}</h3>
            <p>{app.short}</p>
            {app.platforms.length > 0 && (
              <div className="subtitle">
                <h5>{app.subtitle}</h5>
                <div className="platforms">
                  {app.platforms.map((p, i) => (
                    <span key={i} className="platform">{p}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

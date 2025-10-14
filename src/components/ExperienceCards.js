import React, { useState, useEffect } from "react";
import "../styles/Experience.css";

export default function ExperienceCards() {
  const [experiences, setExperiences] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch("/data/experience.json")
      .then(res => res.json())
      .then(data => setExperiences(data))
      .catch(err => console.error(err));
  }, []);

  if (selected) {
    return (
      <div className="experience-detail">
        <button onClick={() => setSelected(null)} className="back-btn">← Back</button>
        <h3>{selected.company}</h3>
        <p><strong>{selected.role}</strong> — {selected.period}</p>
        <p>{selected.description}</p>
        {selected.images && selected.images.length > 0 ? (
          <div className="gallery">
            {selected.images.map((img, i) => (
              <img key={i} src={img} alt={`${selected.company} ${i + 1}`} />
            ))}
          </div>
        ) : (
          <p className="no-images">No images available for this experience.</p>
        )}
      </div>
    );
  }

  return (
    <div className="experience-cards">
      {experiences.map((exp, i) => (
        <div key={i} className="experience-card" onClick={() => setSelected(exp)}>
          <h4>{exp.company}</h4>
          <p className="role">{exp.role}</p>
          <p className="period">{exp.period}</p>
        </div>
      ))}
    </div>
  );
}

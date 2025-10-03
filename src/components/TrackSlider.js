import React from "react";

const TrackSlider = ({ selectedTrack, onTrackChange }) => {
  const tracks = [
    { id: "psp", name: "PSP", fullName: "Python Programming" },
    { id: "dsa", name: "DSA", fullName: "Data Structures & Algorithms" },
    { id: "ada", name: "ADA", fullName: "Analysis & Design of Algorithms" },
  ];

  return (
    <div className="track-slider-container">
      <div className="track-slider" data-track={selectedTrack}>
        {tracks.map((track) => (
          <button
            key={track.id}
            onClick={() => onTrackChange(track.id)}
            className={`track-button ${selectedTrack === track.id ? "active" : ""}`}
            title={track.fullName}
          >
            <span className="track-name">{track.name}</span>
            <span className="track-fullname">{track.fullName}</span>
          </button>
        ))}
      </div>
      <div className="track-indicator">
        <div 
          className="track-indicator-bar" 
          style={{ 
            transform: `translateX(${tracks.findIndex(t => t.id === selectedTrack) * 100}%)` 
          }}
        />
      </div>
    </div>
  );
};

export default TrackSlider;

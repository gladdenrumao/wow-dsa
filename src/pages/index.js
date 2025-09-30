import React from "react";
import { useRouter } from "next/router";
import { topics } from "../data/topics";
import TrackSlider from "../components/TrackSlider";
import { useTrack } from "../context/TrackContext";


const Home = () => {
  const router = useRouter();
  const { selectedTrack, setSelectedTrack } = useTrack();

  const handleTrackChange = (track) => {
    setSelectedTrack(track);
  };

  // Filter topics based on selected track
  // For now, all topics belong to DSA
  const filteredTopics = selectedTrack === "dsa" ? topics : [];

  return (
    <div className="full-page-sidebar">
      <h1 className="sidebar-title">WOW DSA</h1>
      <TrackSlider selectedTrack={selectedTrack} onTrackChange={handleTrackChange} />
      
      {selectedTrack === "dsa" && (
        <div className="sidebar-topics">
          {filteredTopics.map((topic) => (
            <button
              key={topic.id}
              onClick={() => router.push(`/${topic.id}`)}
              className="sidebar-button"
            >
              {topic.name}
            </button>
          ))}
        </div>
      )}
      
      {selectedTrack === "psp" && (
        <div className="empty-track-message">
          <p>🚧 Python Programming Course notes coming soon!</p>
        </div>
      )}
      
      {selectedTrack === "ada" && (
        <div className="empty-track-message">
          <p>🚧 Analysis & Design of Algorithms notes coming soon!</p>
        </div>
      )}
    </div>
  );
};

export default Home;

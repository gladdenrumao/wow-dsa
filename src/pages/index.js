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
  const filteredTopics = topics.filter(topic => topic.track === selectedTrack);

  return (
    <div className="full-page-sidebar">
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
      
      {selectedTrack === "ada" && (
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
    </div>
  );
};

export default Home;

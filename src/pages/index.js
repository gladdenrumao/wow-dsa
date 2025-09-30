import React from "react";
import { useRouter } from "next/router";
import { topics } from "../data/topics";


const Home = () => {
  const router = useRouter();

  return (
    <div className="full-page-sidebar">
      <h1 className="sidebar-title">WOW DSA</h1>
      <div className="sidebar-topics">
        {topics.map((topic) => (
          <button
            key={topic.id}
            onClick={() => router.push(`/${topic.id}`)}
            className="sidebar-button"
          >
            {topic.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;

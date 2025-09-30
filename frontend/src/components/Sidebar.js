import React from "react";
import { useRouter } from "next/router";
import { topics } from "../data/topics";

const Sidebar = () => {
  const router = useRouter();

  return (
    <aside className="sidebar">
      <h2 className="text-xl font-bold mb-4 text-gray-700">Topics</h2>
      {topics.map((topic) => (
        <button
          key={topic.id}
          onClick={() => router.push(`/${topic.id}`)}  // Navigating to topic page
          className={`sidebar-btn ${router.pathname === `/${topic.id}` ? "active" : ""}`}
        >
          {topic.name}
        </button>
      ))}
    </aside>
  );
};

export default Sidebar;

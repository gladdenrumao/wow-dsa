import React, { createContext, useContext, useState } from "react";

const TrackContext = createContext();

export const useTrack = () => {
  const context = useContext(TrackContext);
  if (!context) {
    throw new Error("useTrack must be used within TrackProvider");
  }
  return context;
};

export const TrackProvider = ({ children }) => {
  const [selectedTrack, setSelectedTrack] = useState("psp"); // Default to PSP

  return (
    <TrackContext.Provider value={{ selectedTrack, setSelectedTrack }}>
      {children}
    </TrackContext.Provider>
  );
};

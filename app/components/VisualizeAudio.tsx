import React, { useState } from 'react';
import { useVoiceVisualizer, VoiceVisualizer } from "react-voice-visualizer";

const AudioVisualizer = () => {
  const [isVisualizing, setIsVisualizing] = useState(false);
 // Initialize the recorder controls using the hook
 const recorderControls = useVoiceVisualizer();
 const {
     // ... (Extracted controls and states, if necessary)
     recordedBlob,
     error,
 } = recorderControls;
  const toggleVisualizer = () => {
    setIsVisualizing(!isVisualizing);
  };

  return (
    <div>
      <h3>Live Audio Visualization</h3>
      <button onClick={toggleVisualizer} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
        {isVisualizing ? "Stop Visualization" : "Start Visualization"}
      </button>
      
      {isVisualizing && (
        <VoiceVisualizer
          width={600}
          height={200}
          controls={recorderControls}
        //   strokeColor="#3e8e41"
        //   lineWidth={2}
        />
      )}
    </div>
  );
};

export default AudioVisualizer;

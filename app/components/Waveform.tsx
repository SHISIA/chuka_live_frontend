// components/Waveform.tsx

import React, { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';

interface WaveformProps {
  audioUrl: string;
}

const Waveform: React.FC<WaveformProps> = ({ audioUrl }) => {
  const waveformRef = useRef<HTMLDivElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const waveSurferInstance = useRef<WaveSurfer | null>(null);

  useEffect(() => {
    if (waveformRef.current && audioUrl) {
      // Initialize WaveSurfer
      waveSurferInstance.current = WaveSurfer.create({
        container: waveformRef.current,
        barWidth: 3,
        cursorWidth: 1,
        backend: 'WebAudio',
        height: 80,
        progressColor: '#2D5BFF',
        // responsive: true,
        waveColor: '#EFEFEF',
        cursorColor: 'transparent',
      });

      waveSurferInstance.current.load(audioUrl);

      // Cleanup WaveSurfer on component unmount
      return () => {
        waveSurferInstance.current?.destroy();
      };
    }
  }, [audioUrl]);

  const handlePlayPause = () => {
    if (waveSurferInstance.current) {
      waveSurferInstance.current.playPause();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="w-full">
      <button
        onClick={handlePlayPause}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <div ref={waveformRef} className="waveform mt-4"></div>
      <audio controls>
        <source src={audioUrl} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Waveform;

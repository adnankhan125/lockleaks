import React, { useRef, useState } from 'react';
import '../styles/AgenciesVideo.css';

const AgenciesVideo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };
  return (
    <section className="Agencies-video-section">
      <div className="Agencies-video-wrapper">
        <video
          ref={videoRef}
          className="Agencies-video-player"
          poster="https://via.placeholder.com/850x450"
          controls={isPlaying}
        >
          <source src="/videos/LLeaks.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {!isPlaying && (
          <button className="Agencies-play-button" onClick={handlePlay}>
            <img src="/images/Component 1.svg" alt="Play" />
          </button>
        )}
      </div>
    </section>
  );
};
export default AgenciesVideo;


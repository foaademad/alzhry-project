"use client";

import React, { useState, useEffect, useRef } from "react";

type VideoHeroProps = {
  videoSrc: string;
  title: string;
  subtitle?: string;
  text: string;
};

export default function VideoHero({ videoSrc, title, subtitle, text }: VideoHeroProps) {
  const [showContent, setShowContent] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // fade-out بعد 10 ثواني
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);         // نص يختفي
      setShowOverlay(false);    // overlay يختفي
      setTimeout(() => setShowContent(false), 800); // بعد انتهاء الفيد اوت للنص
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="video_hero">
      {/* الفيديو */}
      <video
        ref={videoRef}
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        className="hero_video"
      />

      {/* Overlay */}
      {showOverlay && <div className={`video_overlay ${fadeOut ? "fade_out" : "fade_in_overlay"}`}></div>}

      {/* الإضاءات المتحركة */}
      <span className="shape s1"></span>
      <span className="shape s2"></span>
      <span className="shape s3"></span>

      {/* المحتوى */}
      {showContent && (
        <div className={`hero_content ${fadeOut ? "fade_out" : "fade_in_slide"}`}>
          {subtitle && <h2 className="hero_subtitle">{subtitle}</h2>}
          <h1 className="hero_title">{title}</h1>
          <p className="hero_text">{text}</p>
        </div>
      )}

      {/* زر التشغيل / الإيقاف */}
      <div className="video_controls">
        <button onClick={togglePlay}>
          {isPlaying ? (
            <svg width="24" height="24" fill="currentColor">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg width="24" height="24" fill="currentColor">
              <path d="M8 5v14l11-7L8 5z" />
            </svg>
          )}
        </button>
      </div>
    </section>
  );
}

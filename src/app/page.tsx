"use client";
import React, { useEffect, useRef, useState } from "react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const 

  const startRecording = () => {
    if (!stream) return;
    const mediaRecorder = new MediaRecorder(stream,{
      audioBitsPerSecond: 128000,
      videoBitsPerSecond: 2500000,
      framerate: 25,
    });

    mediaRecorder.ondataavailable{
      console.log("data available");
    }

  useEffect(() => {
    // Request camera and microphone access
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((mediaStream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = mediaStream; // Display stream in video
          }
          setStream(mediaStream); // Store the stream for later use
        })
        .catch((error) => {
          console.error("Error accessing media devices: ", error);
        });
    }
  }, []);

  // Start recording on button click
 


    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Media Recorder Example</h1>

      {/* Video Element */}
      <video
        className="size-60 border rounded"
        autoPlay
        muted
        ref={videoRef}
      ></video>

      {/* Start Button */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        onClick={startRecording}
      >
        START RECORDING
      </button>
        </div>
      }
  
  

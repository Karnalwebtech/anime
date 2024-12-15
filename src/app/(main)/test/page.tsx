"use client";
import { useState } from "react";
import axios from "axios";

export default function VideoUploader() {
  const [videoFile, setVideoFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState("");

  const APIKey = "jJYOdq8a5e9o"; // Replace with your actual API Key

  // Function to handle video file selection
  const handleFileChange = (e: any) => {
    setVideoFile(e.target.files[0]);
  };

  // Function to upload video
  const uploadVideo = async () => {
    if (!videoFile) {
      alert("Please select a video file.");
      return;
    }

    setUploadStatus("Fetching upload server...");
    try {
      // Step 1: Get the upload server URL
      const serverResponse = await axios.get(
        `https://api.vidguard.to/v1/upload/server?key=${APIKey}`
      );

      const uploadUrl = serverResponse.data.result.url; // Extract upload URL

      // Step 2: Upload the video file to the server
      setUploadStatus("Uploading video...");
      const formData = new FormData();
      formData.append("file", videoFile); // Add video file
      formData.append("key", APIKey); // Add API key
      //   formData.append("folder", "YOUR_FOLDER_ID"); // Replace YOUR_FOLDER_ID if needed

      await axios.post(uploadUrl, formData, {
        onUploadProgress: (progressEvent: any) => {
          const progress = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(progress);
        },
      });

      setUploadStatus("Video uploaded successfully!");
    } catch (error) {
      console.error("Error uploading video:", error);
      setUploadStatus("Failed to upload video. Please try again.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Video Uploader</h1>
      <input
        type="file"
        accept="video/mp4,video/x-m4v,video/*"
        onChange={handleFileChange}
      />
      <button
        onClick={uploadVideo}
        style={{
          marginLeft: "10px",
          padding: "10px",
          backgroundColor: "#0070f3",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Upload Video
      </button>
      <div style={{ marginTop: "20px" }}>
        {uploadStatus && <p>{uploadStatus}</p>}
        {uploadProgress > 0 && <p>Progress: {uploadProgress}%</p>}
      </div>
    </div>
  );
}

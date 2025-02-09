"use client";


import Video from "next-video";
import ecoVideo from "@/videos/ecoVideo.mp4";

import { useIsClient } from "@/hooks/useIsClient";

const UploadVideo = () => {
 

  // Ensure styles are applied only after the component mounts

  const mounted = useIsClient(); // Using the custom hook

  if (!mounted) {
    return null; // Return nothing until the component has mounted
  }

  return (
    <div className="h-[400px] w-full overflow-hidden relative">
      <Video
        src={ecoVideo}
        
        style={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default UploadVideo;

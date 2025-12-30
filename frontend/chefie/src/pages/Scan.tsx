import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Scan() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const navigate = useNavigate();

  // Start camera
  useEffect(() => {
    if (videoRef.current) {
      navigator.mediaDevices
        .getUserMedia({ video: { facingMode: "environment" } })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((err) => {
          console.error("Camera access error:", err);
        });
    }
  }, []);

  const captureImage = () => {
    if (!videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageData = canvas.toDataURL("image/jpeg");

    setCapturedImage(imageData);

    // Stop camera after capture
    const stream = video.srcObject as MediaStream;
    stream.getTracks().forEach((track) => track.stop());
  };

  return (
    <div className="min-h-screen px-6 py-6 max-w-md mx-auto">
      {/* Header */}
      <div className="mb-4">
        <h1 className="text-xl font-semibold">
          Scan Ingredients 📷
        </h1>
        <p className="text-gray-600 text-sm mt-1">
          Place vegetables clearly in front of the camera
        </p>
      </div>

      {/* Camera / Preview */}
      <div className="rounded-2xl overflow-hidden bg-black aspect-[3/4] flex items-center justify-center">
        {!capturedImage ? (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={capturedImage}
            alt="Captured"
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Hidden canvas */}
      <canvas ref={canvasRef} className="hidden" />

      {/* Actions */}
      <div className="mt-6 space-y-3">
        {!capturedImage ? (
          <button
            onClick={captureImage}
            className="
              w-full py-4 rounded-2xl
              bg-black text-white text-lg font-medium
              active:scale-[0.98] transition
            "
          >
            Capture Image
          </button>
        ) : (
          <>
            <button
              onClick={() => navigate("/confirm")}
              className="
                w-full py-4 rounded-2xl
                bg-black text-white text-lg font-medium
              "
            >
              Use This Image
            </button>

            <button
              onClick={() => window.location.reload()}
              className="
                w-full py-3 rounded-2xl
                border border-gray-300
              "
            >
              Retake
            </button>
          </>
        )}
      </div>
    </div>
  );
}

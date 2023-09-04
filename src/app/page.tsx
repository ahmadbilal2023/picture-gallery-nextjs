"use client";
import Image from "next/image";
import { CldImage, CldUploadButton } from "next-cloudinary";
import { useState } from "react";

interface UploadImage {
  event: "success";
  info: { public_id: string };
}

export default function Home() {
  // use state to change the image
  const [imageId, setImageId] = useState("lfr2sdrkhj6uxguv7c6w");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* upload button */}
      <CldUploadButton
        uploadPreset="it mate"
        onUpload={(result) => {
          let res = result as UploadImage;
          setImageId(res.info.public_id);
        }}
      />

      <CldImage
        width="400"
        height="400"
        src={imageId}
        sizes="100vw"
        alt="Description of my image"
      />
    </main>
  );
}

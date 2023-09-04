"use client";
import { CldImage } from "next-cloudinary";
import React from "react";

const View = ({ src }: { src: string }) => {
  return (
    <div>
      <CldImage
        className="rounded-sm"
        width="400"
        height="400"
        src={src}
        sizes="100vw"
        alt="Description of my image"
      />
    </div>
  );
};

export default View;

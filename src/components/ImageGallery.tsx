"use client";
import Upload from "@/app/gallery/Upload";
import View from "@/app/gallery/View";
import React from "react";

export default function ImageGallery({ data }: any) {
  return (
    <>
      <div className="flex justify-between items-center px-4 py-5">
        <h2 className="text-3xl font-semibold tracking-tight">GalleryPage</h2>
        <Upload />
      </div>
      <div className="columns-4 gap-4 space-y-4 mx-auto p-5">
        {data.resources.map(
          (item: { public_id: string }, i: React.Key | null | undefined) => {
            return (
              <div key={i} className="break-inside-avoid">
                <View src={item.public_id} />
              </div>
            );
          }
        )}
      </div>
    </>
  );
}

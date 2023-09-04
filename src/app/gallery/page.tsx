import React from "react";

import cloudinary from "cloudinary";

import ImageGallery from "@/components/ImageGallery";

interface MyImage {
  public_id: string;
}
const GalleryPage = async () => {
  let res = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("public_id", "desc")
    .max_results(100)
    .execute()) as { resources: MyImage[] };

  return <ImageGallery data={res} />;
};

export default GalleryPage;

import React from "react";
import about from "@styles/about.module.css";

const GalleryPage = () => {
  return (
    <div className={about.about}>
      <div className={about.main}>
        <h1 className={about.title}>PHOTO GALLERY</h1>
        <p className={about.description}>
          Photos from the many events the Club has participated in, to look back
          on our achievements, and remind us of what we’re capable of.
        </p>
      </div>
    </div>
  );
};

export default GalleryPage;

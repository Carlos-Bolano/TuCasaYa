import React from "react";

const CoverSection = () => {
  return (
    <section className="hero grid place-items-center relative">
      <div className="overlay"></div>
      <video
        src="https://res.cloudinary.com/dgcszmmz3/video/upload/v1713715930/video_guiimt.mp4"
        autoPlay
        loop
        muted
        className="video"
      ></video>
      <header className="container text-start flex flex-col gap-4 text-white z-10">
        <h1 className="font-amaranth text-6xl max-w-[920px]">
          La mejor forma de encontrar la casa de tus sueños en Magangue
        </h1>
        <p className="text-xl max-w-[520px] font-sans">
          Descubre la belleza de Magangue y encuentra un hogar donde cada calle
          cuenta una historia
        </p>
      </header>
    </section>
  );
};

export default CoverSection;

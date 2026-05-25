"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const SLIDES = [
  "/001.jpg",        // Closeboard fencing
  "/004.jpg",        // Block paving driveway
  "/005.jpg",        // Slate roof
  "/007.jpg",        // Garden & landscaping
  "/008.jpg",        // Double wooden gates
  "/home-hero-1.jpg",// Patio with fencing
  "/002.jpg",        // Narrow passage gate
  "/006.jpg",        // Tarmac driveway
  "/003.jpg",        // Decorative diamond-trellis fence
  "/bg-image-2.jpg", // Roofing worker
  "/009.jpg",        // Fence panel construction
];

export default function GallerySlider() {
  return (
    <div className="gallery-slider-wrap">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={2}
        loop={true}
        speed={3500}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        allowTouchMove={true}
        breakpoints={{
          640:  { slidesPerView: 3, spaceBetween: 10 },
          768:  { slidesPerView: 4, spaceBetween: 10 },
          1024: { slidesPerView: 5, spaceBetween: 10 },
        }}
        className="gallery-swiper">
        {SLIDES.map((src, i) => (
          <SwiperSlide key={i}>
            <div
              className="gallery-slide h-44 w-full"
              style={{ backgroundImage: `url('${src}')`, backgroundSize: "cover", backgroundPosition: "center" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

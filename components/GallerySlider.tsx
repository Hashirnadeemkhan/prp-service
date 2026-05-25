"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const GALLERY_ITEMS = [
  { image: "/home-hero-1.jpg", bg: "linear-gradient(135deg, #2a4a2a, #4a6e4a)" },
  { image: "/bg-image-2.jpg", bg: "linear-gradient(135deg, #2a2a3a, #3d3d5e)" },
  { image: "/home-hero-1.jpg", bg: "linear-gradient(135deg, #4a3d2a, #6e5a3d)" },
  { image: "/bg-image-2.jpg", bg: "linear-gradient(135deg, #3a4a3a, #5e6e5e)" },
  { image: "/home-hero-1.jpg", bg: "linear-gradient(135deg, #2a3a4a, #3d5a6e)" },
  { image: "/bg-image-2.jpg", bg: "linear-gradient(135deg, #1a3a1a, #2a5e2a)" },
  { image: "/home-hero-1.jpg", bg: "linear-gradient(135deg, #3a2a1a, #5e4a2a)" },
  { image: "/bg-image-2.jpg", bg: "linear-gradient(135deg, #2a3a4a, #4a5a6e)" },
];

export default function GallerySlider() {
  return (
    <div className="gallery-slider-wrap">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={8}
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
        {GALLERY_ITEMS.map((item, i) => (
          <SwiperSlide key={i}>
            <div
              className="gallery-slide h-40 md:h-44 w-full"
              style={{
                background: `url('${item.image}') center/cover no-repeat, ${item.bg}`,
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

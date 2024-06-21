import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";

import arrowLeft from "./assets/arrow-left.svg";
import arrowRight from "./assets/arrow-right.svg";

import image1 from "./assets/01.jpg";
import image2 from "./assets/02.jpg";
import image3 from "./assets/03.jpg";
import image4 from "./assets/04.jpg";
import image5 from "./assets/05.jpg";
import image6 from "./assets/06.jpg";


function Carousel() {
  // const swiperLeft = useRef<HTMLDivElement>(null);
  // const swiperRight = useRef<HTMLDivElement>(null);
  const imgs = [image1, image2, image3, image4, image5, image6];

  return (
    <div className="h-[95vh]">
      <Swiper
        modules={[EffectCoverflow, Navigation, Pagination]}
        navigation={{
          prevEl: ".button-prev",
          nextEl: ".button-next",
        }}
        pagination={{
          clickable: true,
        }}
        speed={1000}
        slidesPerView={"auto"}
        centeredSlides
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
      >
        {imgs.map((slide, index) => (
          <SwiperSlide key={index} className="slide-inner">
            <img src={slide} alt="" className="" />
          </SwiperSlide>
        ))}
        <div className="button-prev">
          <img src={arrowLeft} alt="Left" />
        </div>
        <div className="button-next">
          <img src={arrowRight} alt="Right" />
        </div>
      </Swiper>
    </div>

  );
}

export default Carousel;

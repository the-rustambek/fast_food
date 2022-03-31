import { useEffect, useState } from 'react';
  
import { Swiper, SwiperSlide } from "swiper/react";
import "./Swiper.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
 

export default function SwiperFood() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [swippers, setSwippers] = useState([]);
  
 

  return (
    <div className="swiper swipers">
      <div className="container-fluid">
      <div className='swiper-box'>
      <Swiper  
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        
     
        <SwiperSlide className='swiper-slide'>
          <img className='swiper-img'  src="https://cdn.delever.uz/delever/1b71b079-f375-43ca-b24b-04d0e0b9b0dd" />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <img className='swiper-img'  src="https://cdn.delever.uz/delever/f5094e04-ad42-41d3-9989-6ebfe167a8bc" />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <img className='swiper-img'  src="https://cdn.delever.uz/delever/5f985809-5a75-44bd-9209-dd4fa911169b" />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <img className='swiper-img'  src="https://cdn.delever.uz/delever/1b71b079-f375-43ca-b24b-04d0e0b9b0dd" />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <img className='swiper-img'  src="https://cdn.delever.uz/delever/1b71b079-f375-43ca-b24b-04d0e0b9b0dd" />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <img className='swiper-img'  src="https://cdn.delever.uz/delever/f5094e04-ad42-41d3-9989-6ebfe167a8bc" />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <img className='swiper-img'  src="https://cdn.delever.uz/delever/5f985809-5a75-44bd-9209-dd4fa911169b" />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <img className='swiper-img'  src="https://cdn.delever.uz/delever/1b71b079-f375-43ca-b24b-04d0e0b9b0dd" />
        </SwiperSlide>
        </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
           <SwiperSlide>
          <img className='swiper-pic' src="https://cdn.delever.uz/delever/1b71b079-f375-43ca-b24b-04d0e0b9b0dd" />
        </SwiperSlide>
         
        <SwiperSlide>
          <img className='swiper-pic' src="https://cdn.delever.uz/delever/f5094e04-ad42-41d3-9989-6ebfe167a8bc" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='swiper-pic' src="https://cdn.delever.uz/delever/5f985809-5a75-44bd-9209-dd4fa911169b" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='swiper-pic' src="https://cdn.delever.uz/delever/1b71b079-f375-43ca-b24b-04d0e0b9b0dd" />
        </SwiperSlide>
        
        <SwiperSlide>
          <img className='swiper-pic' src="https://cdn.delever.uz/delever/1b71b079-f375-43ca-b24b-04d0e0b9b0dd" />
        </SwiperSlide>
         
        <SwiperSlide>
          <img className='swiper-pic' src="https://cdn.delever.uz/delever/f5094e04-ad42-41d3-9989-6ebfe167a8bc" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='swiper-pic' src="https://cdn.delever.uz/delever/5f985809-5a75-44bd-9209-dd4fa911169b" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='swiper-pic' src="https://cdn.delever.uz/delever/1b71b079-f375-43ca-b24b-04d0e0b9b0dd" />
        </SwiperSlide>
      </Swiper>
      
    
  
    </div>
      </div>
    </div>
   
  );
}
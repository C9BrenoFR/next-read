'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';


const slides = [
    {
      id: 1,
      title: "Slide 1",
      image: "https://via.placeholder.com/160"
    },
    {
      id: 2,
      title: "Slide 2",
      image: "https://via.placeholder.com/180"
    },
    {
      id: 3,
      title: "Slide 3",
      image: "https://via.placeholder.com/200"
    },
  ];
  
  export default function Carousel() {
    return (
      <section className="w-full h-auto">
        <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
        >
            {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
                <Image 
                src={slide.image} 
                alt={slide.title}
                sizes='100vw'
                style={{ width: "100%", height: "600px" }}
                width={500}
                height={300}
                />
            </SwiperSlide>
            ))}
        </Swiper>
      </section>
    );
  }
  
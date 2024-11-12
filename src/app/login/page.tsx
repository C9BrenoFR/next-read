'use client';

import LoginCard from "@/components/cards/login_card";
import SingUpCard from "@/components/cards/sing_up_card";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Navigation } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-flip';

export default function Login(){
    return (
        <div className="w-full h-svh bg-login-background bg-cover flex justify-center items-center">
            <Swiper className="w-full flex flex-row justify-center"
            modules={[EffectFlip]}
            effect="flip"
            slidesPerView={1}
            loop={true}
            >
                <SwiperSlide className=" !flex !flex-row !justify-center">
                    <LoginCard></LoginCard>
                </SwiperSlide>
                <SwiperSlide className=" !flex !flex-row !justify-center">
                    <SingUpCard></SingUpCard>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
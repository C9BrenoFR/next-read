'use client';

import BookButton from "@/components/custom_buttons/book_button";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter"

export default function HeroSection(){

    return(
        <section className="w-ful h-fit">
        <div className="w-full h-[500px] bg-[#011126] flex justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <p className="text-6xl text-customWhite-variant2">Next Read</p>
            <p className="text-customWhite-variant2">
                Descubra sua próxima
                {' '}
                <Typewriter 
                words={['leitura', 'aventura', 'jornada', 'história', 'experiência']}
                loop={true}
                cursor={true}
                />
            </p>
          </div>
        </div>
        <div className="flex justify-center itens-center w-full h-fit p-2 bg-[#011126]">
          <div className="flex flex-col justify-center items-center w-[90%] h-[200px]  rounded-lg">
            <p className="text-2xl text-customWhite-variant2 mb-2">Seja bem-vindo ao Next Read, o lugar onde você encontra a sua próxima leitura!</p>
            <BookButton href="/books" text="Expanda seu mundo!"/>
          </div>
        </div>
        </section>
    )
}
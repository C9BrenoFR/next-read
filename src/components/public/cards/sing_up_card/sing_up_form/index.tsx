import TransparentButton from "@/components/public/custom_buttons/transparent_button"
import TransparentInput from "@/components/public/inputs/transparent_input"
import { useSwiper } from "swiper/react";

export default function SingUpForm(){
   const swiper = useSwiper();

   return(
    <form action="#" className="flex flex-col gap-y-3 p-3 items-start text-white">
        <div className="flex justify-center items-center flex-col w-full">
            <p>Relizar Cadastro</p>
        </div>
        
        <TransparentInput name="name" placeholder="Nome"/>
        <TransparentInput name="email" type="email" placeholder="E-mail"/>
        <TransparentInput name="password" type="password" placeholder="Senha"/>

        <div className="w-full flex flex-col items-center">
            <TransparentButton type="submit">Cadastrar</TransparentButton>
            <button type="button" onClick={() => swiper.slideNext()} className="text-xs text-black underline pt-1">Ja tem conta?</button>
        </div>
    </form>
   )
}
import Image from "next/image";
import Link from "next/link";
import { useSwiper } from "swiper/react";
import TransparentInput from "../../inputs/transparent_input";
import TransparentButton from "../../custom_buttons/transparent_button";

export default function LoginCard(){
    const swiper = useSwiper();
    return (
        <div className="glass-bg p-3 text-amber-300">
            <Link href={"/"} className="w-full flex justify-center mt-9">
                <Image
                className="rounded-full mt-[-40px]"
                src="/img/logoSymbol.png"
                alt="logo"
                width={100}
                height={100}
                ></Image>
            </Link>
            <form action="#" className="flex flex-col gap-y-3 p-3 items-center text-white">
                <div className="flex justify-center items-center flex-col w-full">
                    <p>Bem vindo de volta!</p>
                </div>

                <TransparentInput name="email" type="email" placeholder="E-mail"/>
                <TransparentInput name="password" type="password" placeholder="Senha"/>
                
                <div className="w-full flex flex-col items-center">
                    <TransparentButton>Login</TransparentButton>
                    <button type="button" onClick={() => swiper.slideNext()} className="text-xs text-black underline pt-1">Não tem conta?</button>
                </div>
            </form>
        </div>
    )
}
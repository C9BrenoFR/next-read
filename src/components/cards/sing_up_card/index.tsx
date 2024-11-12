import Image from "next/image";
import Link from "next/link";
import { useSwiper } from "swiper/react";

export default function SingUpCard(){

 const swiper = useSwiper();

 return(
    <div className="glass-bg p-3 text-amber-300">
        <Link href={"/"} className="w-full flex justify-center mt-9">
            <Image
            className="rounded-full mt-[-40px]"
            src="/img/logoSymbol.png"
            alt="logo"
            width={100}
            height={100}
            />
        </Link>
        <form action="#" className="flex flex-col gap-y-3 p-3 items-start">
            <div className="flex flex-col">
                <input name="name" type="name" placeholder="Nome" className="rounded-full bg-transparent ps-3 py-1 border border-white placeholder:text-white focus:outline-none" />
            </div>


            <div className="flex flex-col">
                <input name="email" type="email" placeholder="Email" className="rounded-full bg-transparent ps-3 py-1 border border-white placeholder:text-white focus:outline-none" />
            </div>

            <div className="flex flex-col">
                <input name="password" type="password" placeholder="Senha" className="rounded-full bg-transparent ps-3 py-1 border border-white placeholder:text-white focus:outline-none" />
            </div>
            
            <div className="w-full flex flex-col items-center">
                <button className="rounded-full border border-white hover:bg-white py-1 px-14 hover:text-black transition-all ease-in-out bg-transparent text-white">Login</button>
                <button type="button" onClick={() => swiper.slideNext()} className="text-xs text-black underline pt-1">Ja tem conta?</button>
            </div>
        </form>
    </div>
 );
}
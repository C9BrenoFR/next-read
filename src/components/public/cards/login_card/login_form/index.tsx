"use client";

import TransparentButton from "@/components/public/custom_buttons/transparent_button";
import TransparentInput from "@/components/public/inputs/transparent_input";
import { signIn } from "next-auth/react";
import { useSwiper } from "swiper/react";

export default function LoginForm(){
    const swiper = useSwiper();

    function login(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        const formData = new FormData(e.currentTarget)

        const data = {
            email: formData.get('email'),
            password: formData.get('password')
        }

        signIn('credentials', {
            ...data,
            callbackUrl: '/admin/dashboard'
        })
    }

    return (
        <form onSubmit={login} className="flex flex-col gap-y-3 p-3 items-center text-white">
            <div className="flex justify-center items-center flex-col w-full">
                <p>Bem vindo de volta!</p>
            </div>

            <TransparentInput name="email" type="email" placeholder="E-mail"/>
            <TransparentInput name="password" type="password" placeholder="Senha"/>
            
            <div className="w-full flex flex-col items-center">
                <TransparentButton type="submit">Login</TransparentButton>
                <button type="button" onClick={() => swiper.slideNext()} className="text-xs text-black underline pt-1">Não tem conta?</button>
            </div>
        </form>
    )
}
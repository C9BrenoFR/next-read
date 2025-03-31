import TitleUnderline from "@/components/public/cards/title_underline";
import { FaHouse, FaPhone, FaWhatsapp } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

export default function ContactUs(){
    return(
        <section className="w-1/3 h-full flex flex-col justify-center items-center">
            <div className="flex flex-col gap-3">
                <TitleUnderline>Entre em contato</TitleUnderline>
                <div className="flex items-center mt-4 ">
                    <FaHouse/>
                    <p>Judge of out, General Girls, BR</p>
                </div>
                <div className="flex items-center">
                    <FaPhone/>
                    <p>+55 32 4002-8922</p>
                </div>
                <div className="flex items-center">
                    <FaWhatsapp/>
                    <p>+55 32 7070-7070</p>
                </div>
                <div className="flex items-center">
                    <IoMail/>
                    <p>contact@nextread.com</p>
                </div>
            </div>
        </section>
    )
 }
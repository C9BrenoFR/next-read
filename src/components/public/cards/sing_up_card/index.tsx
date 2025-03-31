import Image from "next/image";
import Link from "next/link";
import SingUpForm from "./sing_up_form";

export default function SingUpCard(){

 return(
    <div className="glass-bg p-3 text-amber-300">
        <Link href={"/"} className="w-full flex justify-center mt-9">
            <Image
            className="rounded-full mt-[-40px]"
            src="/img/logo.png"
            alt="logo"
            width={100}
            height={100}
            />
        </Link>
        <SingUpForm/>
    </div>
 );
}
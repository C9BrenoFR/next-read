import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function SuperiorSection(){
   return(
       <section className="w-full h-12 flex items-center justify-between px-4">
            <p>Acompanhe nossas redes sociais:</p>
            <div className="flex gap-2">
                <FaFacebookF/>
                <FaTwitter/>
                <FaInstagram/>
                <FaLinkedin/>
                <FaGithub/>
            </div>
       </section>
   )
}
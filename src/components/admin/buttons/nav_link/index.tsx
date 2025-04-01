import { navLink } from "@/interfaces/navLink"
import Link from "next/link"

interface NavLinkProps{
    link: navLink
}

export default function NavLink({link}: NavLinkProps){
   return(
       <Link
       href={link.uri}
       className="relative group cursor-pointer"
       >
        {link.title}
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-customBlack transition-all duration-300 group-hover:w-[100%]"></span>
       </Link>
   )
}
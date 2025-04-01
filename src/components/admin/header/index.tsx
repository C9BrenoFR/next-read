import UserController from "../buttons/user_controller";
import Routes from "./routes";

interface HeaderProps{
    user?: {
        name?: string | null
        email?: string | null
        image?: string | null
    }
}

export default function Header({user}: HeaderProps){
   return(
       <header className="bg-customWhite-variant1 text-customBlack flex justify-between px-3 h-14">
            <UserController name={user?.name}/>
            <Routes isAdmin={user?.isAdmin} />
            <div></div>
       </header>
   )
}
interface TitleUnderlineProps{
    children: any
    className?: string
    handleSwitchExibition?: (newExibition: "logo" | "mission" | "vision" | "values") => void
}

export default function TitleUnderline({children, className = "", handleSwitchExibition}: TitleUnderlineProps){
   return(  
    <p onClick={() => handleSwitchExibition?.("logo")} className={`text-customWhite-variant1 font-bold relative after:content-[''] after:block after:w-1/3 after:h-[2px] after:bg-customBlue-dark after:mt-1 ${className}`}>
        {children}
    </p>
   )
}
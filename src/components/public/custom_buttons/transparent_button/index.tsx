interface TransparentButtonProps{
    children: any
    type: "submit" | "reset" | "button"
    dark?: boolean
}

export default function TransparentButton({children, dark = false, type}: TransparentButtonProps){
    const color = dark ? "border-black hover:bg-black hover:text-white text-black" : "border-white hover:bg-white hover:text-black text-white"
    return(
        <button type={type} className={`rounded-full border py-1 px-14 ${color} transition-all ease-in-out bg-transparent`}>
            {children}
        </button>
    )
}
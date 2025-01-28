import { InputProps } from "@/interfaces/input";

export default function LineInput({name, type = "text", placeholder, dark = false, className}: InputProps) {
    const color = dark ? "border-b-[#011126] hover:border-[#011126] text-[#011126]" : "border-b-customWhite-variant2 hover:border-customWhite-variant2 text-customWhite-variant2 placeholder:text-customWhite-variant2" 
    return(
        <input type={type} name={name} placeholder={placeholder} className={`p-0.5 pl-6 bg-transparent focus:outline-none border border-transparent ${color} ${className}`} />
    )
}
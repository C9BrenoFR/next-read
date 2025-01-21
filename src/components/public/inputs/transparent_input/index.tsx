import { InputProps } from "@/interfaces/input";


export default function TransparentInput({name, type = "text", placeholder, dark = false}: InputProps){
    const color = dark ? "border-black placeholder:text-black" : "border-white placeholder:text-white"
    return(
        <div className="flex flex-col">
            <input name={name} type={type} placeholder={placeholder} className={`rounded-full bg-transparent ps-3 py-1 border ${color} focus:outline-none`} />
        </div>
    )
}
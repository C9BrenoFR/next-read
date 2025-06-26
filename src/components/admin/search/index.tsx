interface SearchProps{
    value: string
    handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void
    children: string
}

export default function Search({value , children, handleSearch}: SearchProps){


   return(
        <section className={`flex flex-row justify-around rounded py-1 border border-customBlack px-3 w-72`}>
            <input value={value} onChange={handleSearch} name="search" type="search" placeholder={children} className={`block bg-transparent placeholder:text-customBlack focus:outline-none`} />
            <span className="material-symbols-outlined hover:cursor-pointer">search</span>
        </section>
   )
}
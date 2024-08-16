
interface TitleCardProps {
    title : string,
}

export default function TitleCard({title}: TitleCardProps) {
    return (
        <article className="h-14 w-full flex flex-row mb-6">
            <div className={`h-full w-[25%] px-11 flex justify-end font-courier text-xl text-customBlack items-center bg-[#0cdbf2]`}>{title}</div>
            <div className={` 
            border-t-[28px] border-t-[#0cdbf2]
            border-l-[28px] border-l-[#0cdbf2] 
            border-b-[28px] border-b-transparent
            border-r-[28px] border-r-transparent
                `}></div>
        </article>
    )
}
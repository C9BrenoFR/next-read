import { isEven } from "@/app/js/isEven"

type base = {
    id: number
}

interface TableProps<T extends base>{
    data: T[]
    keys: (keyof T)[]
    columns: string[]
}

export default function Table<T extends base>({data, keys, columns}: TableProps<T>){
   return(
       <div className="h-4/5 text-customWhite-variant1">
       <table className="w-full overflow-hidden border-spacing-0 border-separate mb-2">
            <thead>
                <tr>
                    {columns.map((column, index) => (
                        <th 
                        key={index}
                        style={{width: `${100 / keys.length}%`}}
                        className={`bg-customBlack border-customBlack border-r-4 font-bold py-5 ${index === 0 && "rounded-tl border-l-4"} ${index === (columns.length - 1) && "rounded-tr"}`} 
                        >
                            {column}
                        </th>
                    ))}
                </tr>
            </thead>
        </table>
        <table className="w-full overflow-hidden border-spacing-0 border-separate mb-2">
            <tbody>
                {data.map((item, index) => (
                    <tr key={item.id}>
                        {keys.map((key) => (
                            <th
                            key={`${String(key)}-${item.id}`}
                            style={{width: `${100 / keys.length}%`}}
                            className={`py-5 truncate ${key === 'id' && 'border-l-4 border-[#5a42c6]'} ${isEven(index) ? 'bg-[#2C3034]' : 'bg-[#212529]'}`}
                            >
                                {String(item[key])}
                            </th>
                        ))}
                    </tr>
                ))}
            </tbody>
       </table>
       </div>
   )
}
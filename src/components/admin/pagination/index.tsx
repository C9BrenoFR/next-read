import { useState } from "react";

interface PaginationProps{
    total_itens: number,
    paginateItens: (page: number) => void
}

const ITENS_PER_PAGE = 5;

export default function Pagination({total_itens, paginateItens}: PaginationProps){
    const [curent_page, setCurentPage] = useState(1);
    const total_pages = Math.ceil(total_itens/ITENS_PER_PAGE)

    let pages = [];
    for (let index = 0; index < total_pages; index++)
        pages[index] = index + 1;

    function switchPage(page: number){
        setCurentPage(page);
        paginateItens(page)
    }

    return(
        <main className="w-full flex justify-center">
            <section  className="flex justify-center items-center gap-x-2 border border-customBlack rounded-lg ">
            <div
            onClick={() => switchPage(curent_page - 1)}
            className={`text-customBlack cursor-pointer flex justify-center p-4 ${curent_page == 1 && "pointer-events-none"}`}
            >
                <div className="cursor-pointer flex justify-center border-r pr-2">
                    <span className="material-symbols-outlined">chevron_left</span>
                    Previus
                </div>
            </div>
            {pages.map((page, index) => (
                <div
                onClick={() => switchPage(page)}
                key={index}
                className={`cursor-pointer border-customBlack text-customBlack p-4 ${page == curent_page && "border-x"}`}
                >
                {page}
                </div>
            ))}
            <div
            onClick={() => switchPage(curent_page + 1)} 
            className={`text-customBlack cursor-pointer flex justify-center p-4 ${total_pages == curent_page && "pointer-events-none"}`}
            >
                <div className="cursor-pointer flex justify-center border-l pl-2">
                    Next
                    <span className="material-symbols-outlined">chevron_right</span>
                </div>
            </div>
            </section>
        </main>
    );
}
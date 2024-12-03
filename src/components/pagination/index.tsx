import Link from "next/link";

interface PaginationProps{
    curent_page: number,
    total_pages: number,
    base_url: string,
}

export default function Pagination({curent_page, total_pages, base_url}: PaginationProps){
    let previus_page = curent_page;
    let next_page = curent_page;
    
    if(curent_page > 1)
        previus_page--;
    if(curent_page < total_pages)
        next_page++;
    let pages = [];
    for (let index = 0; index < total_pages; index++)
        pages[index] = index + 1;

    return(
        <main className="w-full flex justify-center">
            <section  className="flex justify-center items-center gap-x-2 border border-customWhite-variant2 rounded-lg ">
            <Link
            href={base_url + `?page=${previus_page}`}
            className={`text-customWhite-variant2 flex justify-center p-4 ${curent_page == 1 && "pointer-events-none"}`}
            >
                <div className="flex justify-center border-r pr-2">
                    <span className="material-symbols-outlined">chevron_left</span>
                    Previus
                </div>
            </Link>
            {pages.map((page, index) => (
                <Link
                key={index}
                href={base_url + `?page=${page}`}
                className={`text-customWhite-variant2 p-4 ${page == curent_page && "border-x"}`}
                >
                {page}
                </Link>
            ))}
            <Link
            href={base_url + `?page=${next_page}`}
            className={`text-customWhite-variant2 flex justify-center p-4 ${total_pages == curent_page && "pointer-events-none"}`}
            >
                <div className="flex justify-center border-l pl-2">
                    Next
                    <span className="material-symbols-outlined">chevron_right</span>
                </div>
            </Link>
            </section>
        </main>
    );
}
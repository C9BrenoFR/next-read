import { getBooks } from "@/backend/admin/book/actions";
import BooksPage from "@/components/admin/books_page";

export default async function Page(){
    const fetch_books = await getBooks();

    return(
        <main className="h-full w-full bg-[radial-gradient(circle_at_bottom,#5a42c6,#131228)] text-customWhite-variant1 flex items-center justify-center">
            <BooksPage fetch_books={fetch_books}/>
        </main>
    )
}
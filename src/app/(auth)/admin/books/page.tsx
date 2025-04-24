import { getBooks } from "@/backend/admin/book/actions";
import BooksPage from "@/components/admin/books_page";
import { Book } from "@/interfaces/client";

export default async function Page(){
    const fetch_books = await getBooks();
    let corrected_fetch_books:Book[] = [];
    fetch_books.forEach(book => {
        corrected_fetch_books.push({
            ...book,
            price: Number(book.price),
            rating: Number(book.rating),
        })
    })

    return(
        <main className="h-full w-full bg-[radial-gradient(circle_at_bottom,#5a42c6,#131228)] text-customWhite-variant1 flex items-center justify-center">
            <BooksPage fetch_books={corrected_fetch_books}/>
        </main>
    )
}
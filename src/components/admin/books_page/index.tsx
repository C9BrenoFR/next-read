import { Book } from "@prisma/client";
import Table from "../table";

interface BooksPageProps{
    books: Book[]
}

export default function BooksPage({books}: BooksPageProps){
   return(
       <section className="bg-customWhite-variant1 w-11/12 h-[90%] shadow-image-shadow rounded text-customBlack p-5"> 
            <Table data={books} keys={['id', 'name', 'price', 'category', 'rating']} columns={['#', 'Nome', 'Preço', 'Categoria', 'Nota']} />
       </section>
   )
}
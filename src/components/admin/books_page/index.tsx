'use client';

import { Book } from "@prisma/client";
import Table from "../table";
import { useState } from "react";
import Pagination from "../pagination";

interface BooksPageProps{
    fetch_books: Book[]
}

export default function BooksPage({fetch_books}: BooksPageProps){
   const [books, setBooks] = useState<Book[]>(fetch_books.slice(0, 5));

   function paginateItens(page: number){
    const start = 5 * (page - 1);
    const end = start + 5;
    setBooks([...fetch_books.slice(start, end)])
   }

   return(
       <section className="bg-customWhite-variant1 w-11/12 h-[90%] shadow-image-shadow rounded text-customBlack p-5"> 
            <Table data={books} keys={['id', 'name', 'price', 'category', 'rating']} columns={['#', 'Nome', 'Preço', 'Categoria', 'Nota']} />
            <Pagination total_itens={fetch_books.length} paginateItens={paginateItens} />
       </section>
   )
}
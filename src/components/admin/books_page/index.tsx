'use client';

import Table from "../table";
import { useState } from "react";
import Pagination from "../pagination";
import { Book } from "@/interfaces/client";
import Search from "../search";

interface BooksPageProps{
    fetch_books: Book[]
}

export default function BooksPage({fetch_books}: BooksPageProps){
   const [search, setSearch] = useState('');
   const [books, setBooks] = useState<Book[]>(fetch_books.filter(book => book.name === search));

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
}

   function paginateItens(page: number){
    const start = 5 * (page - 1);
    const end = start + 5;
    setBooks([...fetch_books.slice(start, end)])
   }

   return(
       <section className="bg-customWhite-variant1 w-11/12 h-[90%] shadow-image-shadow rounded text-customBlack p-5">
            <Search value={search} handleSearch={handleChange}>Pesquise por um livro...</Search>
            <Table data={books} keys={['id', 'name', 'price', 'category', 'rating']} columns={['#', 'Nome', 'Preço', 'Categoria', 'Nota']} />
            <Pagination total_itens={fetch_books.length} paginateItens={paginateItens} />
       </section>
   )
}
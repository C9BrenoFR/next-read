import prisma from "@/lib/database";

const ITENS_PER_PAGE = 6;

export async function getBooks() {

        const products = await prisma.book.findMany({
            orderBy:{
                id:"asc"
            },
        });
    
        return products;
}
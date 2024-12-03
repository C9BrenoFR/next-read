import prisma from "@/lib/database";

const ITENS_PER_PAGE = 6;

export async function getProducts(page: number) {

    const skip_itens = (page - 1) * ITENS_PER_PAGE;

    const products = await prisma.book.findMany({
        orderBy:{
            id:"desc"
        },
        skip: skip_itens,
        take: (ITENS_PER_PAGE)
    });

    const total_itens = await prisma.book.count();

    const total_pages = Math.ceil(total_itens / ITENS_PER_PAGE);

    return {products, total_pages};
}
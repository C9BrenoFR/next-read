import prisma from "@/lib/database";

export async function getProduct(id:string) {
    
    const product = await prisma.book.findFirstOrThrow({
        where: {
            id: Number(id),
        },
    });

    return product
}
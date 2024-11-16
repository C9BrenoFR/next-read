import prisma from "@/lib/database";

export async function lastSixBooks(){

    const books = await prisma.book.findMany({
        orderBy: {
            id:"desc"
        },
        take: 6
    });
    
    return books
}
import { Credentials } from "@/interfaces/credentials";
import prisma from "@/lib/database";

export async function verifyCredentials(credentials: Credentials|undefined){
    if(!credentials)
        throw new Error("Invalid credentials")
    const user = await prisma.user.findUniqueOrThrow({
        where:{
            email: credentials?.email,
            password: credentials?.password
        }
    });

    return user;
}
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LogoutButton from "@/components/admin/buttons/logout";
import { getServerSession } from "next-auth"

export default async function Page(){
    const session = await getServerSession(authOptions);

    return(
        <main>
            Olá, {session?.user?.name}
            <br/>
            <LogoutButton/>
        </main>
    )
}
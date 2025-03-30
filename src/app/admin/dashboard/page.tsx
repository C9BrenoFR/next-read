import LogoutButton from "@/components/admin/buttons/logout";
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation";

export default async function Page(){
    const session = await getServerSession();

    if(!session)
        redirect("/login");

    return(
        <main>
            Olá, {session?.user?.name}
            <br/>
            <LogoutButton/>
        </main>
    )
}
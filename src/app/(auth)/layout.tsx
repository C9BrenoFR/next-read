import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Header from "@/components/admin/header";
import { getServerSession } from "next-auth"

export default async function PageLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const session = await getServerSession(authOptions);
    return (
      <html lang="en">
        <body>
        <Header user={session?.user} />
          <main className="fullScreenHeightAdmin">
            {children}
          </main>
        </body>
      </html>
    );
  }
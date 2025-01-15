import Footer from "@/components/public/footer";
import Header from "@/components/public/header";

export default function PageLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body>
          <Header />
          <main className="fullScreenHeight bg-[#011126]">
            {children}
          </main>
          <Footer />
        </body>
      </html>
    );
  }
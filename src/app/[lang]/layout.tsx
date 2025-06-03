import Footer from "@/components/templates/layout/footer";
import Header from "@/components/templates/layout/header";
import Sidebar from "@/components/templates/layout/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-auto min-h-full w-320">
      <Header />
      <section>
        <Sidebar />
        {children}
      </section>
      <Footer />
    </main>
  );
}

import Header from "../components/Header";
import Footer from "../components/Footer";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">

      <Header />

      <main className="flex-1 pt-20">
        {children}
      </main>

      <Footer />

    </div>
  );
}

export default MainLayout;
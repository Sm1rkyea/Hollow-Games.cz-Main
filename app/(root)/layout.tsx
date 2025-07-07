import Footer from "@/components/navigation/Footer";
import Navbar from "@/components/navigation/navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="antialiased">
      <Navbar />

      {children}

      <Footer />
    </main>
  );
};

export default layout;
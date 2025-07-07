import Navbar from "@/components/navigation/navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="antialiased">
      <Navbar />

      {children}
    </main>
  );
};

export default layout;
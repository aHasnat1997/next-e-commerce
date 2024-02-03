import HealthyCard from "@/components/HomeComponents/HealthyCard";
import Hero from "@/components/HomeComponents/Hero";
import TopProducts from "@/components/HomeComponents/TopProducts";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <HealthyCard />
      <TopProducts />
    </main>
  );
}

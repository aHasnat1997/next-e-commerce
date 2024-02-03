import HealthyCard from "@/components/HomeComponents/HealthyCard";
import Hero from "@/components/HomeComponents/Hero";

export default function Home() {
  return (
    <main className="min-h-screen h-[300vh]">
      <Hero />
      <HealthyCard />
    </main>
  );
}

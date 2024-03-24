import ResultSection from "../components/ResultSection";
import Header from "@/components/Header";
import GoogleMap from "@/components/GoogleMap";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <div className="flex w-full h-full z-0">
        <ResultSection />
        <GoogleMap />
      </div>
    </main>
  );
}

import ResultSection from "../components/ResultSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex w-full h-full">
        <ResultSection />
        <p className="bg-orange-500 w-full">render map here</p>
      </div>
    </main>
  );
}

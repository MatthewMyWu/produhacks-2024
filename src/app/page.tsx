import ResultSection from "../components/ResultSection";
import Header from "@/components/Header";
import GoogleMap from "@/components/GoogleMap";

async function getData() {
  const res = await fetch("http://localhost:3000/api", { cache: "no-store" });
  
  if (res.ok) return res.json();
  else throw new Error("failed to fetch data");
}

export default async function Home() {
  const data = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <div className="flex w-full h-full z-0">
        <ResultSection suppliers={data} />
        <GoogleMap suppliers={data} />
      </div>
    </main>
  );
}

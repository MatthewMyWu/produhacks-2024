import GoogleMap from "./GoogleMap";
import Header from "./Header";
import ResultSection from "./ResultSection";

export default function HomePage({ data }: { data: any[] }) {
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
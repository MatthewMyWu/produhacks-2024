import ResultSection from "../components/ResultSection";
import Header from "@/components/Header";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Home() {
  const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY!! });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <div className="flex w-full h-full z-0">
        <ResultSection />
        {
          isLoaded
            ? <GoogleMap zoom={10} center={{ lat: 44, lng: -80 }} mapContainerStyle={{width: "100%"}}></GoogleMap>
            : <p className="w-full">loading...</p>
        }
      </div>
    </main>
  );
}

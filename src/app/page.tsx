"use client"
import ResultSection from "../components/ResultSection";
import Header from "@/components/Header";
import GoogleMap from "@/components/GoogleMap";
import { useEffect, useState } from "react";
import { defaultSearchContext, SearchContext } from "@/components/SearchContext";

export default function Home() {
  const [data, setdata] = useState([]);
  const [searchContext, setSearchContext] = useState(defaultSearchContext);


  useEffect(() => {
    const cb = async () => {
      const res = await fetch("http://localhost:3000/api", { 
        method: "GET",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json", // Specify the content type of the body
        },
        body: JSON.stringify(searchContext)
      });
      const content = await res.json();
      setdata(content);
      console.log("from homepage", content);
    }
    cb();
  }, []);

  return (
    <SearchContext.Provider value = {searchContext} >
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <div className="flex w-full h-full z-0">
        <ResultSection suppliers={data} />
        <GoogleMap suppliers={data} />
      </div>
    </main>
    </SearchContext.Provider>
  );
}
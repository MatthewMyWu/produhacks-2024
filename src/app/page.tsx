import ResultSection from "../components/ResultSection";
import Header from "@/components/Header";
import GoogleMap from "@/components/GoogleMap";
import {SearchContext, defaultSearchContext} from "@/components/SearchContext";
import { useState } from "react";
import HomePage from "@/components/HomePage";

async function getData() {
  const res = await fetch("http://localhost:3000/api");
  
  if (res.ok) return res.json();
  else throw new Error("failed to fetch data");
}

export default async function Home() {
  const data = await getData();
  return (
    <HomePage data={data} />
  );
}

import React from "react";
import Head from "next/head";
import SearchForm from "../components/SearchForm";

export default function Home() {
  return (
    <div className="bg-1 mx-auto p-8 h-screen">
      <Head>
        <title>Zuno - GitHub Profile Viewer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="place-self-start text-6xl text-white font-bold clr-1">
        Zuno.
      </h1>
      <div className="h-5/6 flex items-center justify-center container mx-auto">
        <div className="flex items-center justify-center">
          <SearchForm />
        </div>
      </div>
    </div>
  );
}

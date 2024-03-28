"use client";

import React, { Suspense, useState } from "react";
import Loading from "@/components/loading";
import { Navbar } from "@/components/Navbar";
import StarGrid from "@/components/StartGrid";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<Loading />}>
      <div className="overflow-auto scrollbar-hide">
        <Navbar />
        <main className="flex flex-col items-center w-full max-w-full mx-auto ">
          {children}
        </main>
      </div>
    </Suspense>
  );
}

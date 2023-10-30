import Image from "next/image";
import { Inter } from "next/font/google";
import { useGlobalContext } from "@/context/provider";
import { useEffect, useState } from "react";
import { FetchedProduct } from "@/types/types";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const ctx = useGlobalContext();

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="grid grid-cols-3 gap-4">
        {ctx.state.products &&
          ctx.state.products.map((product) => (
            <div
              key={product.id}
              className="col-auto h-auto bg-blue-400 flex-col items-center  justify-between"
            >
              <h4>Name: {product.name}</h4>
              <h4>
                Availability:{" "}
                {product.isAvailable ? "In Stock" : "Out of Stock"}
              </h4>
              <p>Price: £{product.price}</p>
              <div>
                <button className="mx-1">+</button>
                {product.qty}
                <button className="mx-1">-</button>
              </div>
            </div>
          ))}
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  );
}

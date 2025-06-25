import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar invertTextColor />
      <main className="flex min-h-screen w-full flex-col relative">
        <div className="absolute inset-0 w-full h-full -z-10">
          <img
            src="https://images.unsplash.com/photo-1714333679891-92d3c9a3bd75?q=80&w=1130&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Background"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="absolute inset-0 w-full h-full -z-9 bg-white/50" />
        <div className="flex h-screen flex-col items-center justify-center gap-2">
          <h1 className="text-7xl text-aka-900 font-serif font-extrabold">
            404
          </h1>
          <h2 className="text-4xl font-bold text-marshland-900">
            Page Not Found
          </h2>
          <p className="mt-8 text-xl text-black">
            We&rsquo;re sorry, we couldn&rsquo;t find the page you requested.{" "}
            <Link
              className="link text-black underline-offset-4 decoration-[1.5px] hover:text-marshland-400 text-lg"
              href="/"
            >
              Return home
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

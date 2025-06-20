import Link from "next/link";

import Navbar from "@/components/Navbar";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen w-full flex-col">
        <div className="flex h-screen flex-col items-center justify-center gap-2">
          <h1 className="text-6xl font-extrabold">404</h1>
          <h2 className="text-4xl font-bold">Page Not Found</h2>
          <p className="pt-2 text-lg">
            We&apos;re sorry, we couldn&apos;t find the page you requested.
          </p>
          <Link className="link" href="/">
            Return to the home page
          </Link>
          <p />
        </div>
      </main>
    </>
  );
}

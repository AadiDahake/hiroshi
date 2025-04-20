import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-9xl text-accent mb-10">Whoops!</h1>
      <h2 className="text-2xl">
        This page doesn&apos;t exist. Go back{" "}
        <Link href="/" className="underline underline-offset-6">
          home
        </Link>
        .
      </h2>
    </div>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="flex-1 flex flex-col justify-center items-center">
        <h1 className="text-[14rem] text-accent mb-10">
          Whoops!
        </h1>
        <h2 className="text-2xl font-roboto">
          This page doesn&apos;t exist. Go back{" "}
          <Link href="/" className="underline underline-offset-6">
            home
          </Link>
          .
        </h2>
      </div>
    </>
  );
}

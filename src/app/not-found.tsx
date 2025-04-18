import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <div className = 'z-2 flex-1 flex flex-col items-center'>
                <h1 className = 'text-[12rem] text-accent md:mt-50 lg:mt-40 mb-10'>404</h1>
                <h2 className = 'text-2xl font-roboto'>This page doesn&apos;t exist. Go back <Link href = '/' className = 'underline underline-offset-6'>home</Link></h2>
            </div>
        </>
    );
}
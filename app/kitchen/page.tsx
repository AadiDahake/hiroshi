"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";

export default function Kitchen() {
  return (
    <>
      <ScrollToTop />
      <Navbar className="!static" currentPage="Kitchen" invertTextColor={true} />
      <main className="flex min-h-screen w-full flex-col">
        <iframe
          seamless
          className="h-[96vh] w-full overflow-hidden"
          src="https://my.matterport.com/show/?m=wStbQsn2Tab&play=1&brand=0&mls=2&search=0&vr=0"
        />
        <Footer />
      </main>
    </>
  );
}

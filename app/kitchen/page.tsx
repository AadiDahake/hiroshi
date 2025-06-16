"use client";

import { useState } from "react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
// } from "@/components/ui/alert-dialog";

export default function Kitchen() {
  const [showModal, setShowModal] = useState(true);

  return (
    <>
      <Navbar className="!static" currentPage="Kitchen" />
      <main className="flex min-h-screen w-full flex-col">
        {/* <AlertDialog open={showModal} onOpenChange={setShowModal}>
        <AlertDialogContent className="bg-green-white-100">
          <AlertDialogHeader>
            <AlertDialogTitle>Note</AlertDialogTitle>
            <AlertDialogDescription className="text-neutral-800">
              This carbon footprint calculator is powered by a 3rd-party
              application. <br />
              URL:&nbsp;
              <a
                className="link"
                href="https://www.footprintcalculator.org/home/en"
              >
                https://www.footprintcalculator.org/home/en
              </a>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>Close</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog> */}

        <iframe
          frameBorder={0}
          scrolling="no"
          seamless
          style={{
            overflow: "hidden",
          }}
          className="h-[96vh] w-full"
          src="https://my.matterport.com/show/?m=wStbQsn2Tab"
        />
        <Footer />
      </main>
    </>
  );
}

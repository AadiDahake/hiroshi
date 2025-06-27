import Link from "next/link";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";

export default function Sources() {
  const sources: string[] = [
    "https://unsplash.com/photos/a-man-walking-across-a-lush-green-field-OKTEP9NxHJo",
    "https://images.unsplash.com/photo-1528164344705-47542687000d",
    "https://unsplash.com/photos/ramen-platter-on-tabletop-YRSRQpBfsj4",
    "https://unsplash.com/photos/white-van-on-road-during-daytime-qEdL-YYmQMI",
    "https://unsplash.com/photos/blue-and-white-road-sign-8X2siC3gSj4",
    "https://unsplash.com/photos/a-small-house-in-the-woods-with-a-fountain-uLL6fwPnItA",
    "https://unsplash.com/photos/a-couple-of-people-sitting-at-a-table-in-a-restaurant-XTwtjAYGaFI",
    "https://unsplash.com/photos/vegetable-salad-in-white-ceramic-bowl-iDlZaCORBO0",
    "https://hackaday.com/2019/07/02/ramen-lamp-has-us-feeling-hungry/",
  ];

  return (
    <>
      <Navbar invertTextColor={true} />
      <ScrollToTop />
      <main className="h-screen pt-20 px-8 pb-8 bg-bianca-100">
        <div className="prose">
          <h1>Sources</h1>
          <h2 className="mt-2">Image Sources</h2>
          <ul className="text-gray-800 marker:text-gray-800">
            {sources.map((source, index) => (
              <li key={index}>
                <Link className="link" href={source} target="_blank">
                  {source}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";

export default function Sources() {
  return (
    <>
      <Navbar invertTextColor={true} />
      <ScrollToTop />
      <main className="h-screen pt-20 px-8 pb-8 bg-bianca-200">
        <div className="prose">
          <h1>Sources</h1>
          <h2>Image Sources</h2>
          <ul className="text-gray-800 marker:text-gray-800">
            <li>
              https://unsplash.com/photos/a-man-walking-across-a-lush-green-field-OKTEP9NxHJo
            </li>
            <li>
              https://hackaday.com/2019/07/02/ramen-lamp-has-us-feeling-hungry/
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}

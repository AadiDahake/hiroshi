import Link from "next/link";
import Icon from "@mdi/react";
import { mdiTwitter, mdiFacebook, mdiInstagram, mdiGmail } from "@mdi/js";

export default function Footer() {
  return (
    <footer className="mt-20">
      <hr className="border-accent" />
      <div className="flex my-10 mx-20 justify-between">
        <div className="flex flex-col max-w-80">
          <h2 className="uppercase italic text-5xl mb-30">Elevato</h2>
          <p className="text-xl">
            &copy; 2025 Dishant Bhandula, Kethan Vegunta, Varun Gundamaraju,
            Aarush Tahiliani, Aadi Dahake. All rights reserved.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-2xl">Quicklinks</h3>
          <Link
            className="text-2xl text-secondary transition-colors hover:text-accent"
            href="/menu"
          >
            Menu
          </Link>
          <Link
            className="text-2xl text-secondary transition-colors hover:text-accent"
            href="/about"
          >
            About
          </Link>
          <Link
            className="text-2xl text-secondary transition-colors hover:text-accent"
            href="/careers"
          >
            Careers
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-2xl">Account</h3>
          <Link
            className="text-2xl text-secondary transition-colors hover:text-accent"
            href="/rewards"
          >
            Rewards
          </Link>
          <Link
            className="text-2xl text-secondary transition-colors hover:text-accent"
            href="/signup"
          >
            Sign up
          </Link>
          <Link
            className="text-2xl text-secondary transition-colors hover:text-accent"
            href="/order"
          >
            Order
          </Link>
        </div>

        <div className="flex flex-col">
          <h2 className="text-5xl mb-6">Contact us</h2>
          <div className="flex justify-between">
            <a href="mailto:avhstsa@gmail.com">
              <Icon path={mdiGmail} size={1.5} className="text-accent" />
            </a>
            <a href="https://www.avtsa.com/">
              <Icon path={mdiTwitter} size={1.5} className="text-accent" />
            </a>
            <a href="https://www.avtsa.com/">
              <Icon path={mdiFacebook} size={1.5} className="text-accent" />
            </a>
            <a href="https://www.avtsa.com/">
              <Icon path={mdiInstagram} size={1.5} className="text-accent" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

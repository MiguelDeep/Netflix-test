import React from "react";
import FooterContactsLinks from "./FooterContactsLinks";

export default function FooterPageLogin() {
  return (
    <footer className="text-gray-400 mt-20 px-6 md:px-40 md:bg-black bg-zinc-900">
      <div className="max-w-6xl mx-auto p-10">
        <h1 className="pb-6 text-sm">
          Questions ?
          <a href="#" className="underline">
            Contact us.
          </a>
        </h1>

        <nav className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm">
          <FooterContactsLinks>
            <a href="#" className="underline">
              FAQ
            </a>
            <a href="#" className="underline">
              Cookie Preferences
            </a>
          </FooterContactsLinks>
          <FooterContactsLinks>
            <a href="#" className="underline">
              Help Center
            </a>
            <a href="#" className="underline">
              Corporate Information
            </a>
          </FooterContactsLinks>
          <FooterContactsLinks>
            <a href="#" className="underline">
              Terms of Use
            </a>
          </FooterContactsLinks>
          <FooterContactsLinks>
            <a href="#" className="underline">
              Privacy
            </a>
          </FooterContactsLinks>
        </nav>
      </div>
    </footer>
  );
}

import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="border-t border-dotted border-zinc-700 py-12 text-center text-zinc-500">
        © {new Date().getFullYear()} ThumbnailAI — All rights reserved
      </footer>
    </>
  );
};

export default Footer;

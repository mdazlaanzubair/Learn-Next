import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer footer-center p-4 border-t border-gray-300 font-semibold">
      <div>
        <p>
          Copyright © 2k23 - All right reserved by{" "}
          <Link href="/" className=" text-primary underline">
            Codrad
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import Link from "next/link";
import { FaTwitter, FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import Search from "./Search";

export default function Navbar() {
  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
      <Search />
      <div className="md:px-6 prose prose-xl mx-auto flex justify-between flex-col sm:flex-row mt-10">
        <h1 className="text-3xl font-bold text-white grid mb-2 md:mb-0 place-content-center">
          <Link
            href="/"
            className="text-white/90 no-underline hover:text-white"
          >
            Yomi-Olugbodi
          </Link>
        </h1>
        <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl">
          <Link className="text-white/90 hover:text-white" href="e">
            <FaFacebook />
          </Link>
          <Link
            className="text-white/90 hover:text-white"
            href="http://www.linkedin.com/in/bolu-yomi-olugbodi-ab62951a0"
          >
            <FaLinkedin />
          </Link>
          <Link
            className="text-white/90 hover:text-white"
            href="https://github.com/yommexg"
          >
            <FaGithub />
          </Link>
          <Link className="text-white/90 hover:text-white" href="">
            <FaTwitter />
          </Link>
        </div>
      </div>
    </nav>
  );
}

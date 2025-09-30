import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4 px-6 relative z-50">
      <div className="flex justify-between items-center">
        <Link
          href="/"
          className="text-lg font-semibold hover:text-purple-400 transition-colors duration-300"
        >
          Tomas Lasalde Pataro
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/skills" className="hover:underline">
              Skills
            </Link>
          </li>
          <li>
            <Link href="/my-projects" className="hover:underline">
              My Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

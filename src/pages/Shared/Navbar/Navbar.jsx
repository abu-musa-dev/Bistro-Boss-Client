import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gray-900 text-white shadow-lg">
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold tracking-wide text-yellow-500">
                    Bistro-Boss
                </Link>
                
                {/* Desktop Menu */}
                <ul className="hidden lg:flex space-x-6">
                    <li><Link to="/menu" className="hover:text-yellow-400 transition">Our Menu</Link></li>
                    <li><Link to="/about" className="hover:text-yellow-400 transition">About</Link></li>
                    <li><Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link></li>
                    <li><Link to="/services" className="hover:text-yellow-400 transition">Services</Link></li>
                </ul>
                             /// this menu
                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button className="text-white focus:outline-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-8 6h8"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
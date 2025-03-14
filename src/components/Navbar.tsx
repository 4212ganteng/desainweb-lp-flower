import { Link } from "react-router";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const toggleDropdown = (menu: string) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (event.target && !(event.target as Element).closest(".dropdown-container")) {
            setOpenDropdown(null);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <Link to="/" className="text-lg font-bold">Home</Link>
            <div className="flex space-x-6">
                <div className="relative dropdown-container">
                    <button
                        onClick={() => toggleDropdown("florist")}
                        className="px-4 py-2 focus:outline-none hover:bg-gray-700 rounded"
                    >
                        Florist
                    </button>
                    {openDropdown === "florist" && (
                        <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-10">
                            <Link to="/" className="block px-4 py-2 hover:bg-gray-200">Roses</Link>
                            <Link to="/" className="block px-4 py-2 hover:bg-gray-200">Tulips</Link>
                        </div>
                    )}
                </div>
                <div className="relative dropdown-container">
                    <button
                        onClick={() => toggleDropdown("about")}
                        className="px-4 py-2 focus:outline-none hover:bg-gray-700 rounded"
                    >
                        About
                    </button>
                    {openDropdown === "about" && (
                        <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-10">
                            <Link to="/" className="block px-4 py-2 hover:bg-gray-200">Team</Link>
                            <Link to="/" className="block px-4 py-2 hover:bg-gray-200">Contact</Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
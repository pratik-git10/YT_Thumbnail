import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MenuIcon, XIcon } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Generate", href: "/generate" },
  { name: "My Generation", href: "/my-generation", isProtected: true },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const { isLoggedIn, user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const closeMenu = () => setIsOpen(false);

  const handleProtectedNav = (link) => {
    if (link.isProtected && !isLoggedIn) {
      navigate("/login");
      closeMenu();
      return;
    }
    navigate(link.href);
    closeMenu();
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="flex justify-between items-center px-4 m-4 max-w-400 mx-auto">
        {/* Logo */}
        <Link to="/" className="text-xl md:text-3xl font-bold text-pink-700">
          ThumbnailYT
        </Link>

        {/* Desktop Nav */}
        <div className="flex gap-10">
          <div className="hidden md:flex items-center gap-8 font-semibold text-md">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.isProtected && !isLoggedIn ? "/login" : link.href}
                className={({ isActive }) =>
                  isActive
                    ? "text-rose-400 transition duration-300"
                    : "text-white hover:text-rose-300 transition"
                }>
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {isLoggedIn ? (
              <div className="relative group">
                <button className="rounded-full size-8 bg-white/20 border border-white/10">
                  {user?.email?.charAt(0).toUpperCase()}
                </button>

                <div className="absolute hidden group-hover:block right-0 pt-3">
                  <button
                    onClick={logout}
                    className="px-5 py-1.5 rounded bg-white/20 border border-white/10">
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="hidden md:block px-6 py-2.5 bg-pink-600 hover:bg-pink-700 rounded-md transition ease-in-out duration-200 active:scale-95">
                Get Started
              </button>
            )}

            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(true)} className="md:hidden">
              <MenuIcon size={26} />
            </button>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 backdrop-blur flex flex-col items-center justify-center gap-8 text-lg md:hidden transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
        {navLinks.map((link) => (
          <button
            key={link.name}
            onClick={() => handleProtectedNav(link)}
            className="text-white text-xl hover:text-rose-400 transition">
            {link.name}
          </button>
        ))}

        {isLoggedIn ? (
          <button
            onClick={() => {
              logout();
              closeMenu();
            }}
            className="text-white">
            Logout
          </button>
        ) : (
          <button
            onClick={() => {
              navigate("/login");
              closeMenu();
            }}
            className="text-white">
            Login
          </button>
        )}

        <button
          onClick={closeMenu}
          className="size-10 bg-pink-600 hover:bg-pink-700 text-white rounded-md flex items-center justify-center">
          <XIcon />
        </button>
      </div>
    </>
  );
};

export default Navbar;

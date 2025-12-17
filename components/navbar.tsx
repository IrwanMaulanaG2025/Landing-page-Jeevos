"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import products from "@/lib/data/products.json"; // Import products data

import navLinks from "@/lib/data/nav-links.json";
import { NavLink } from "@/lib/data/nav-links";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // Get current pathname
  const isProductDetailPage = pathname.startsWith("/product/"); // Check if it's a product detail page

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarClasses = `fixed top-0 w-full z-50 transition-all duration-300 ${
    isProductDetailPage
      ? "bg-white/95 shadow-md backdrop-blur-sm" // Always solid on product detail page
      : isScrolled
      ? "bg-white/95 shadow-md backdrop-blur-sm"
      : "bg-transparent"
  }`;

  const logoTextClasses = `font-bold text-2xl transition-colors ${
    isProductDetailPage || isScrolled ? "text-gray-800" : "text-white"
  }`;

  const logoBgClasses = `w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
    isProductDetailPage || isScrolled ? "bg-gray-200" : "bg-white"
  }`;

  const navLinkClasses = (linkHref: string) => `font-medium text-sm transition-colors ${
    isProductDetailPage || isScrolled
      ? "text-gray-600 hover:text-emerald-600"
      : "text-white/90 hover:text-white"
  }`;

  const ctaButtonClasses = `hidden sm:flex gap-2 transition-colors ${
    isProductDetailPage || isScrolled
      ? "bg-emerald-600 text-white hover:bg-emerald-700"
      : "bg-white/90 text-emerald-700 hover:bg-white"
  }`;

  const mobileMenuIconClasses = `md:hidden ${
    isProductDetailPage || isScrolled ? "text-gray-800" : "text-white"
  }`;

  return (
    <nav className={navbarClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="flex items-center gap-2">
              <div className={logoBgClasses}>
                <Image width={50} height={50} alt="logo" src={"/logo.png"} />
              </div>
              <span className={logoTextClasses}> Jeevos </span>
            </div>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={navLinkClasses(link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>
          {/* CTA Button and Mobile Menu */}
          <div className="flex items-center gap-4">
             <Button
              asChild
              className={ctaButtonClasses}
              >
              <a
                href="https://wa.me/6285156355964"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={18} />
                
                WhatsApp
              </a>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X size={24} className="text-gray-800" />
              ) : (
                <Menu size={24} className={mobileMenuIconClasses} />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white rounded-b-lg shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="px-3 pt-2 pb-2">
            <Button
              asChild
              className="w-full gap-2 bg-emerald-600 text-white hover:bg-emerald-700"
            >
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

import { Leaf, Facebook, Instagram } from "lucide-react"
import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export default function Footer() {
  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/people/JeevosOfficial/61581211664102/?mibextid=wwXIfr&rdid=2oZnYZuMyPpPM1OZ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1PbSAtGXVg%2F%3Fmibextid%3DwwXIfr%26ref%3Dwaios.fb_links_xma_control" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/itsalsabil_?igsh=MTBwN2VoY3pqNDkybQ==" },
    { 
      name: "TikTok", 
      icon: (props: IconProps) => (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width={props.size} 
          height={props.size} 
          fill="currentColor" 
          viewBox="0 0 24 24"
          {...props}
        >
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.04-5.36-.01-4.03-.01-8.05.02-12.07z"></path>
        </svg>
      ), 
      href: "https://www.tiktok.com/@jeevos.idn?_r=1&_t=ZS-92GllXouwm0" 
    },
  ];

  return (
    <footer className="bg-gray-800 text-gray-300 py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-center md:text-left">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                <Leaf size={24} className="text-white" />
              </div>
              <span className="font-bold text-2xl text-white">Jeevos</span>
            </div>
            <p className="text-gray-400 text-sm max-w-md mx-auto md:mx-0">
              Pure by Nature, Crafted with Purpose. <br />
              Menghadirkan produk kelapa alami, murni, dan berkualitas untuk mendukung gaya hidup sehat Anda.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigasi</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-white transition">
                  Produk
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition">
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* Follow */}
          <div>
            <h4 className="font-semibold text-white mb-4">Ikuti Kami</h4>
            <div className="flex gap-4 justify-center md:justify-start">
              {socialLinks.map(social => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-gray-500 text-center md:text-left">&copy;© 2025 Jeevos — Some assets by Freepik</p>
            <div className="flex gap-6 mt-4 md:mt-0 text-gray-500">
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

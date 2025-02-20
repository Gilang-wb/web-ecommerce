import React from "react";
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Section 1: Logo dan Deskripsi */}
                    <div>
                        <h2 className="text-2xl font-bold">Hype Mode</h2>
                        <p className="mt-4 text-gray-400">
                        Trendy & Stylish Fashion for Everyone.
                        </p>
                    </div>

                    {/* Section 2: Navigasi Cepat */}
                    <div>
                        <h3 className="text-lg font-semibold">Ikuti Kami</h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-gray-400 flex gap-2 items-center"
                                >
                                   <FaFacebookSquare /> Facebook
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-gray-400 flex items-center gap-2"
                                >
                                  <FaInstagramSquare />  Instagram
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-gray-400 flex items-center gap-2"
                                >
                                  <FaTwitterSquare />  Twitter
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Section 3: Kontak dan Media Sosial */}
                    <div>
                        <h3 className="text-lg font-semibold">Kontak Kami</h3>
                        <p className="mt-4 text-gray-400">
                            Jl. Kebahagiaan No.123, Jakarta<br />
                            Telp: (021) 123-4567<br />
                            Email: info@HypeMode.com
                        </p>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500">
                    © {new Date().getFullYear()} Hype Mode. Semua Hak Dilindungi.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
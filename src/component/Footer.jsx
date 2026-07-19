import { Separator } from "@heroui/react";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-white border-t border-slate-200 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <div>
                <span className="font-extrabold text-2xl tracking-tight text-slate-900">
                <span className="text-green-800 text-3xl">S</span>port<span className="text-green-800 text-3xl">N</span>est
              </span>
              </div>
                        <p className="text-sm text-slate-500 font-medium">© 2026 SportNest Inc. All rights reserved.</p>
                    </div>

                    <div className="flex-row">
                        <div className="flex items-center gap-8 text-sm font-bold text-slate-600">
                        <a
                            href="#"
                            className="hover:text-green-800 transition-colors"
                        >
                            About Us
                        </a>
                        <a
                            href="#"
                            className="hover:text-green-800 transition-colors"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="hover:text-green-800 transition-colors"
                        >
                            Terms of Service
                        </a>
                        <a
                            href="#"
                            className="hover:text-green-800 transition-colors"
                        >
                            Contact Support
                        </a>
                    </div>
                        <div className="flex items-center space-x-4 px-25 pt-6 grayscale opacity-60">
                
                                <Image
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png"
                                    alt="LinkedIn"
                                    width={100}
                                    height={24}
                                    className="h-6 w-auto"
                                />
                                <Separator orientation="vertical" 
                                className="h-6 w-px bg-transparent" 
                                style={{ backgroundColor: "#4E56ED" }}/>
                                <Image
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png"
                                    alt="YouTube"
                                    width={100}
                                    height={24}
                                    className="h-6 w-auto"
                                />
                        </div>
                    </div>
                        
                </div>
            </div>
        </footer>
    );
};

export default Footer;
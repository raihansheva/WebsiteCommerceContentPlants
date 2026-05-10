import { useState } from "react";
import { Link } from '@inertiajs/react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="relative z-50 bg-white">
            <div className="mx-auto w-full max-w-[1400px] px-6 py-4 md:px-46">
                <nav className="flex items-center justify-between border-[#355F3E] lg:rounded-2xl lg:border-2 lg:px-6 lg:py-4">
                    <div>
                        <h2 className="text-2xl font-extrabold">Floratify.</h2>
                    </div>

                    <div className="hidden gap-4 lg:flex">
                        <Link className="text-sm hover:underline" href="/">
                            Home
                        </Link>

                        <a className="text-sm hover:underline" href="#about">
                            About
                        </a>

                        <Link className="text-sm hover:underline" href="/artikel">
                            Artikel
                        </Link>

                        <Link className="text-sm hover:underline" href="/shop">
                            Shop
                        </Link>

                        <Link className="text-sm hover:underline" href="/cart">
                            Cart
                        </Link>

                        <Link className="text-sm hover:underline" href="/order">
                            Order
                        </Link>
                    </div>

                    <button
                        id="menu-btn"
                        className="flex cursor-pointer flex-col space-y-1 lg:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span
                            className={`block h-0.5 w-6 bg-black transition ${
                                isOpen ? 'translate-y-1.5 rotate-45' : ''
                            }`}
                        ></span>

                        <span
                            className={`block h-0.5 w-6 bg-black transition ${
                                isOpen ? 'opacity-0' : ''
                            }`}
                        ></span>

                        <span
                            className={`block h-0.5 w-6 bg-black transition ${
                                isOpen ? '-translate-y-1.5 -rotate-45' : ''
                            }`}
                        ></span>
                    </button>
                </nav>
            </div>

            <div
                className={`absolute top-full left-0 w-full flex-col space-y-3 border-b bg-white transition-all duration-300 ease-in-out lg:hidden ${
                    isOpen
                        ? 'pointer-events-auto translate-y-0 opacity-100'
                        : 'pointer-events-none -translate-y-3 opacity-0'
                }`}
            >
                <div className="flex flex-col items-center justify-center">
                    <Link
                        className="w-full py-4 text-center hover:bg-[#355F3E] hover:font-bold hover:text-white"
                        href="/"
                    >
                        Home
                    </Link>

                    <a
                        className="w-full py-4 text-center hover:bg-[#355F3E] hover:font-bold hover:text-white"
                        href="#about"
                    >
                        About
                    </a>

                    <Link
                        className="w-full py-4 text-center hover:bg-[#355F3E] hover:font-bold hover:text-white"
                        href="/artikel"
                    >
                        Artikel
                    </Link>

                    <Link
                        className="w-full py-4 text-center hover:bg-[#355F3E] hover:font-bold hover:text-white"
                        href="/shop"
                    >
                        Shop
                    </Link>

                    <Link
                        className="w-full py-4 text-center hover:bg-[#355F3E] hover:font-bold hover:text-white"
                        href="/cart"
                    >
                        Cart
                    </Link>

                    <Link
                        className="w-full py-4 text-center hover:bg-[#355F3E] hover:font-bold hover:text-white"
                        href="/order"
                    >
                        Order
                    </Link>
                </div>
            </div>
        </header>
    );
}

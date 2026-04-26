import { Link } from '@inertiajs/react';
import { PropsWithChildren, useState } from 'react';

export default function BaseLayout({ children }: PropsWithChildren) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="flex min-h-screen flex-col">
                <header className="relative z-50 flex h-auto w-auto items-center justify-between overflow-visible bg-white p-4 px-8 lg:px-46">
                    <nav className="flex w-full items-center justify-between border-[#355F3E] lg:rounded-2xl lg:border-2 lg:px-6 lg:py-4">
                        <div className="w-auto">
                            <h2 className="text-2xl font-extrabold">
                                Floratify.
                            </h2>
                        </div>
                        <div className="hidden w-auto gap-4 lg:flex">
                            <Link className="text-sm hover:underline" href="/">
                                Home
                            </Link>
                            <Link
                                className="text-sm hover:underline"
                                href="/about"
                            >
                                About
                            </Link>
                            <Link
                                className="text-sm hover:underline"
                                href="/about"
                            >
                                Artikel
                            </Link>
                            <Link
                                className="text-sm hover:underline"
                                href="/about"
                            >
                                Cart
                            </Link>
                            <Link
                                className="text-sm hover:underline"
                                href="/about"
                            >
                                Order
                            </Link>
                            <Link
                                className="text-sm hover:underline"
                                href="/about"
                            >
                                Contact
                            </Link>
                        </div>
                        <button
                            id="menu-btn"
                            className="flex cursor-pointer flex-col space-y-1 lg:hidden"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span
                                className={`block h-0.5 w-6 bg-black transition ${isOpen ? 'translate-y-1.5 rotate-45' : ''}`}
                            ></span>
                            <span
                                className={`block h-0.5 w-6 bg-black transition ${isOpen ? 'opacity-0' : ''}`}
                            ></span>
                            <span
                                className={`block h-0.5 w-6 bg-black transition ${isOpen ? '-translate-y-1.5 -rotate-45' : ''}`}
                            ></span>
                        </button>
                    </nav>
                    <div
                        className={`absolute top-full left-0 -z-1 w-full flex-col space-y-3 border-b bg-white transition-all duration-300 ease-in-out lg:hidden ${
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
                            <Link
                                className="w-full py-4 text-center hover:bg-[#355F3E] hover:font-bold hover:text-white"
                                href="/about"
                            >
                                About
                            </Link>
                            <Link
                                className="w-full py-4 text-center hover:bg-[#355F3E] hover:font-bold hover:text-white"
                                href="/contact"
                            >
                                Artikel
                            </Link>
                            <Link
                                className="w-full py-4 text-center hover:bg-[#355F3E] hover:font-bold hover:text-white"
                                href="/contact"
                            >
                                Cart
                            </Link>
                            <Link
                                className="w-full py-4 text-center hover:bg-[#355F3E] hover:font-bold hover:text-white"
                                href="/contact"
                            >
                                Order
                            </Link>
                            <Link
                                className="w-full py-4 text-center hover:bg-[#355F3E] hover:font-bold hover:text-white"
                                href="/contact"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </header>
                <main className="flex-1 px-8 md:px-46 md:py-4">{children}</main>
                <footer>
                    <div className="flex w-full flex-col items-center justify-center gap-4 py-4 text-center">
                        <h2 className="text-[12px] text-gray-600 lg:text-sm">
                            &copy; 2026 Floratify. All rights reserved.
                        </h2>
                    </div>
                </footer>
            </div>
        </>
    );
}

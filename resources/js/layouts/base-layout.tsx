import { Link } from '@inertiajs/react';
import { PropsWithChildren, useState } from 'react';

export default function BaseLayout({ children }: PropsWithChildren) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className="relative z-50 flex h-auto p-4 w-auto items-center justify-between overflow-visible bg-white px-8 md:px-46">
                <nav className="flex w-full items-center justify-between md:border-2 md:rounded-2xl md:px-6 md:py-4">
                    <div className="w-auto">
                        <h2 className="text-2xl font-extrabold">Floratify.</h2>
                    </div>
                    <div className="hidden w-auto gap-4 md:flex">
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/about">Artikel</Link>
                        <Link href="/about">Cart</Link>
                        <Link href="/about">Order</Link>
                        <Link href="/about">Contact</Link>
                    </div>
                    <button
                        id="menu-btn"
                        className="flex cursor-pointer flex-col space-y-1 md:hidden"
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
                    className={`absolute top-full left-0 -z-1 w-full flex-col space-y-3 border-b  bg-white transition-all duration-300 ease-in-out md:hidden ${
                        isOpen
                            ? 'pointer-events-auto translate-y-0 opacity-100'
                            : 'pointer-events-none -translate-y-3 opacity-0'
                    }`}
                >
                    <div className="flex flex-col justify-center items-center">
                        <Link className='w-full text-center py-4 hover:bg-[#355F3E] hover:text-white hover:font-bold ' href="/">Home</Link>
                        <Link className='w-full text-center py-4 hover:bg-[#355F3E] hover:text-white hover:font-bold ' href="/about">About</Link>
                        <Link className='w-full text-center py-4 hover:bg-[#355F3E] hover:text-white hover:font-bold ' href="/contact">Artikel</Link>
                        <Link className='w-full text-center py-4 hover:bg-[#355F3E] hover:text-white hover:font-bold ' href="/contact">Cart</Link>
                        <Link className='w-full text-center py-4 hover:bg-[#355F3E] hover:text-white hover:font-bold ' href="/contact">Order</Link>
                        <Link className='w-full text-center py-4 hover:bg-[#355F3E] hover:text-white hover:font-bold ' href="/contact">Contact</Link>
                    </div>
                </div>
            </header>
            <div className="px-8 md:px-46 md:py-4">{children}</div>
        </>
    );
}

import { Link } from '@inertiajs/react';
import { PropsWithChildren, useState } from 'react';
import Navbar from '../components/cpages/layouts/navbar';
import Footer from '../components/cpages/layouts/footer';

export default function BaseLayout({ children }: PropsWithChildren) {
    return (
        <>
            <div className="flex min-h-screen flex-col">
                <Navbar/>
                <main className="mx-auto w-full max-w-[1400px] flex-1 px-6 py-4 md:px-46">
                    {children}
                </main>
                <Footer/>
            </div>
        </>
    );
}

import BaseLayout from '@/layouts/base-layout';

export default function Home({ username }: { username: string }) {
    return (
        <BaseLayout>
            <div className="flex h-auto w-full flex-col items-center justify-center pt-5 md:flex-row">
                <div className="text-center">
                    <h1 className="text-3xl font-extrabold">
                        Grow Better, Live Greener
                    </h1>
                    <p className="mt-4 text-sm text-gray-600">
                        Floratify adalah platform digital yang menggabungkan
                        artikel edukasi tanaman dengan e-commerce tanaman dalam
                        satu tempat. Pengguna bisa belajar cara merawat tanaman,
                        menemukan inspirasi, dan langsung membeli tanaman
                        favorit mereka dengan mudah setelah login.
                    </p>
                    <div className="flex gap-4 justify-center mt-4">
                        <button className="text-[12px] rounded-md bg-[#1A1A1A] px-4 py-2 text-white cursor-pointer hover:text-white hover:font-bold">
                            Jelajahi Artikel
                        </button>
                        <button className="text-[12px] rounded-md bg-[#1A1A1A] px-4 py-2 text-white cursor-pointer hover:text-white hover:font-bold">
                            Mulai Berbelanja
                        </button>
                    </div>
                </div>
                <div className=""></div>
            </div>
        </BaseLayout>
    );
}

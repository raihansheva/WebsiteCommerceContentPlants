import BaseLayout from '@/layouts/base-layout';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay } from 'swiper/modules';

export default function Home({ username }: { username: string }) {
    const imgs = [
        '/assets/images/imgPlantPot4.png',
        '/assets/images/imgPlantPot2.png',
        '/assets/images/imgPlantpot.png',
        '/assets/images/imgPlantPot5.png',
        '/assets/images/imgPlantPot3.png',
    ];

    return (
        <BaseLayout>
            <div className="flex mb-12 w-full flex-col-reverse items-start justify-end gap-4 lg:flex-row lg:items-start lg:min-h-screen">
                <div className=" flex w-full flex-col gap-4 text-center lg:text-left lg:mt-8">
                    <h1 className="text-3xl font-extrabold lg:text-7xl">
                        Grow Better, Live Greener
                    </h1>
                    <p className="text-sm text-gray-600 lg:text-base">
                        Floratify adalah platform digital yang menggabungkan
                        artikel edukasi tanaman dengan e-commerce tanaman dalam
                        satu tempat. Pengguna bisa belajar cara merawat tanaman,
                        menemukan inspirasi, dan langsung membeli tanaman
                        favorit mereka dengan mudah setelah login.
                    </p>
                    <div className="flex justify-center gap-2 lg:justify-start">
                        <button className="cursor-pointer rounded-md bg-[#1A1A1A] px-4 py-2 text-[12px] text-white hover:bg-[#313131] hover:text-white lg:text-[14px]">
                            Jelajahi Artikel
                        </button>
                        <button className="cursor-pointer rounded-md bg-[#1A1A1A] px-4 py-2 text-[12px] text-white hover:bg-[#313131] hover:text-white lg:text-[14px]">
                            Mulai Berbelanja
                        </button>
                    </div>
                </div>
                <div className="mx-auto mt-8 w-full max-w-sm">
                    <div className="hidden h-58 w-auto flex-col items-end justify-end lg:flex lg:h-auto">
                        <img
                            src="/assets/images/imgPlantPot5.png"
                            className="mx-auto w-44 lg:w-60"
                        />
                    </div>
                    <div className="flex h-58 w-auto flex-col items-end justify-end lg:hidden">
                        <img
                            src="/assets/images/imgPlantpot.png"
                            className="mx-auto w-44 lg:w-60"
                        />
                    </div>
                </div>
            </div>
            <hr className="my-4 hidden border border-gray-700 lg:block" />
            <div className="mt-4 min-h-screen w-full">
                <div className='text-center'>
                    <h1 className="text-3xl font-extrabold lg:text-6xl">About</h1>
                </div>
            </div>
        </BaseLayout>
    );
}

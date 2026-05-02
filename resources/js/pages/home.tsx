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
            <div className="mb-12 flex w-full flex-col-reverse items-start justify-end gap-4 lg:min-h-screen lg:flex-row lg:items-start">
                <div className="flex w-full flex-col gap-4 text-center lg:mt-8 lg:text-left">
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
            <div className="mt-4 w-full lg:mt-8">
                <div className="flex h-auto flex-col items-start justify-start gap-4 lg:gap-8">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-center text-3xl font-extrabold lg:text-5xl">
                            Tentang
                        </h1>
                        <p className="text-sm text-gray-600 lg:text-lg">
                            Floratify adalah platform digital yang menggabungkan
                            artikel edukasi tanaman dengan e-commerce tanaman
                            dalam satu tempat. Pengguna bisa belajar cara
                            merawat tanaman, menemukan inspirasi, dan langsung
                            membeli tanaman favorit mereka dengan mudah setelah
                            login.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 lg:flex-row lg:gap-8">
                        <div className="flex flex-col gap-2 rounded-2xl border-2 border-slate-900 p-4">
                            <span className="text-center text-3xl font-extrabold lg:text-4xl">
                                Why We Do
                            </span>
                            <p className="text-sm text-gray-600 lg:text-lg">
                                Kami membangun platform yang memudahkan kamu
                                untuk menemukan, menikmati, dan mengeksplor
                                berbagai konten dalam satu tempat. Dengan
                                tampilan yang clean dan navigasi yang sederhana,
                                kami ingin memberikan pengalaman yang nyaman dan
                                menyenangkan setiap kali kamu mengaksesnya.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 rounded-2xl border-2 border-slate-900 p-4">
                            <span className="text-center text-3xl font-extrabold lg:text-4xl">
                                Why We Exist
                            </span>
                            <p className="text-sm text-gray-600 lg:text-lg">
                                Kami percaya bahwa konten bukan hanya sekadar
                                informasi, tapi juga bisa menjadi sumber
                                inspirasi dan tempat untuk berkembang. Di tengah
                                banyaknya konten yang ada, kami ingin
                                menghadirkan ruang yang lebih sederhana dan
                                terarah agar kamu bisa menemukan hal yang
                                benar-benar bermanfaat tanpa merasa kewalahan.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-8"></div>
            </div>
            <div className="mt-12">
                <div className="h-auto w-auto">
                    <img
                        src="/assets/images/imageAbout.jpg"
                        alt=""
                        className="h-30 w-full rounded-2xl object-cover lg:h-60"
                    />
                </div>
                <div className="my-4 flex h-auto w-full flex-col gap-4 lg:gap-4">
                    <span className="text-center text-3xl font-extrabold lg:text-5xl">
                        Discover Content
                    </span>
                    <p className="text-center text-sm text-gray-600 lg:text-lg">
                        Temukan artikel tanaman menarik yang bisa kamu baca dan
                        eksplor sesuai minatmu.
                    </p>
                </div>
                {/* <div className="flex flex-wrap gap-2 lg:gap-4">
                    <div className="w-[calc(50%-8px)] h-auto py-2 bg-gray-900 lg:w-[calc(25%-12px)] rounded-lg">
                        <p className="text-center text-white">Konten 1</p>
                    </div>
                </div> */}
            </div>
        </BaseLayout>
    );
}

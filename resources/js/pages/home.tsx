import BaseLayout from '@/layouts/base-layout';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Autoplay } from 'swiper/modules';

export default function Home({ username }: { username: string }) {
    const cardsRef = useRef<HTMLDivElement[]>([]);
    gsap.registerPlugin(ScrollTrigger);
    const sectionRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(
            '.title',
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8 },
        )
            .fromTo(
                '.desc',
                { y: 60, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 },
                '-=0.5', // overlap
            )
            .fromTo(
                '.buttons button',
                { y: 60, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, stagger: 0.2 },
                '-=0.5',
            )
            .fromTo(
                '.img',
                { y: 60, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 },
                '-=0.6',
            )
            .fromTo(
                '.imgHero',
                { y: 60, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 },
                '-=0.6',
            );
    }, []);


    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%', // mulai saat masuk viewport
                    toggleActions: 'play none none none',
                },
            });

            tl.from('.about-title', {
                y: 60,
                opacity: 0,
                duration: 0.6,
            })
                .from(
                    '.about-desc',
                    {
                        y: 60,
                        opacity: 0,
                        duration: 0.6,
                    },
                    '-=0.3',
                )
                .from(
                    '.card',
                    {
                        y: 80,
                        opacity: 0,
                        duration: 0.6,
                        stagger: 0.2,
                    },
                    '-=0.3',
                );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const imgs = [
        '/assets/images/imgPlantPot4.png',
        '/assets/images/imgPlantPot2.png',
        '/assets/images/imgPlantpot.png',
        '/assets/images/imgPlantPot5.png',
        '/assets/images/imgPlantPot3.png',
    ];

    return (
        <BaseLayout>
            <div className="flex flex-col items-start justify-start gap-4 lg:gap-8">
                <div className="flex w-full flex-col-reverse items-start justify-end gap-4 lg:flex-row lg:items-start">
                    <div className="flex w-full flex-col gap-4 text-center lg:mt-4 lg:text-left">
                        <h1 className="title text-3xl font-extrabold lg:text-7xl">
                            Grow Better, Live Greener
                        </h1>
                        <p className="desc text-sm text-gray-600 lg:text-base">
                            Floratify adalah platform digital yang menggabungkan
                            artikel edukasi tanaman dengan e-commerce tanaman
                            dalam satu tempat. Pengguna bisa belajar cara
                            merawat tanaman, menemukan inspirasi, dan langsung
                            membeli tanaman favorit mereka dengan mudah setelah
                            login.
                        </p>
                        <div className="buttons flex justify-center gap-2 lg:justify-start">
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
                                className="img mx-auto w-44 lg:w-60"
                            />
                        </div>
                        <div className="flex h-58 w-auto flex-col items-end justify-end lg:hidden">
                            <img
                                src="/assets/images/imgPlantpot.png"
                                className="img mx-auto w-44 lg:w-60"
                            />
                        </div>
                    </div>
                </div>
                <div className="hidden h-auto w-full lg:block">
                    <img
                        src="/assets/images/imageAbout.jpg"
                        alt=""
                        className="imgHero h-30 w-full rounded-2xl object-cover object-center lg:h-45 "
                    />
                </div>
            </div>
            <hr className="my-4 lg:block border-[white]" id='about'/>
            <div ref={sectionRef} className="mt-24 w-full lg:mt-8" >
                <div className="flex h-auto flex-col items-start justify-start gap-4 lg:gap-8">
                    <div className="flex flex-col gap-2">
                        <h1 className="about-title text-center text-3xl font-extrabold lg:text-5xl">
                            Tentang
                        </h1>
                        <p className="about-desc text-center text-sm text-gray-600 lg:text-lg">
                            Floratify adalah platform digital yang menggabungkan
                            artikel edukasi tanaman dengan e-commerce tanaman
                            dalam satu tempat. Pengguna bisa belajar cara
                            merawat tanaman, menemukan inspirasi, dan langsung
                            membeli tanaman favorit mereka dengan mudah setelah
                            login.
                        </p>
                    </div>
                    <div className="about-card flex flex-col gap-4 lg:flex-row lg:gap-8">
                        <div className="card flex cursor-pointer flex-col gap-2 rounded-3xl border-2 bg-[#355F3E] p-8 text-white  hover:bg-[#2B4F2A]">
                            <span className="text-start text-3xl font-extrabold lg:text-4xl">
                                Why We Do ?
                            </span>
                            <p className="text-sm text-gray-50 lg:text-lg">
                                Kami membangun platform yang memudahkan kamu
                                untuk menemukan, menikmati, dan mengeksplor
                                berbagai konten dalam satu tempat. Dengan
                                tampilan yang clean dan navigasi yang sederhana,
                                kami ingin memberikan pengalaman yang nyaman dan
                                menyenangkan setiap kali kamu mengaksesnya.
                            </p>
                        </div>
                        <div className="card flex cursor-pointer flex-col gap-2 rounded-3xl border-2 bg-[#355F3E] p-8 text-white  hover:bg-[#2B4F2A]">
                            <span className="text-start text-3xl font-extrabold lg:text-4xl">
                                Why We Exist ?
                            </span>
                            <p className="text-sm text-gray-50 lg:text-lg">
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

'use client'

import s from '@/components/sections/Section8/Section8.module.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules';
import Image from 'next/image';
import thanks1 from '@/assets/images/content/thanks1.jpg'
import thanks2 from '@/assets/images/content/thanks2.jpg'
import thanks3 from '@/assets/images/content/thanks3.jpg'

export const ThanksTab = () => {
    const thanks = [
        {
            id: 1,
            image: thanks1,
            name: 'Sofitel',
        },
        {
            id: 2,
            image: thanks2,
            name: 'BI Group',
        },
        {
            id: 3,
            image: thanks3,
            name: 'Полиция Абу Даби',
        },
        {
            id: 1,
            image: thanks1,
            name: 'Sofitel',
        },
        {
            id: 2,
            image: thanks2,
            name: 'BI Group',
        },
        {
            id: 3,
            image: thanks3,
            name: 'Полиция Абу Даби',
        },
    ];

    return (
        <div className={s.tabContainer}>
            <p className={s.title}>Благодарности</p>
            <p className={s.description}>Благодарственные письма из Sofitel The Palm и BI group и полиции Абу Даби</p>
            <div className={s.swiperContainer}>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={3}
                    loop={true}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        }
                    }}
                    className={s.swiper}
                >
                    {thanks.map((thank) => (
                        <SwiperSlide key={thank.id} className={s.swiperThanksSlide}>
                            <Image
                                src={thank.image}
                                alt={thank.name}
                                width={344}
                                height={172}
                                className={s.imageThanks}
                            />
                            <p className={s.thanksName}>{thank.name}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

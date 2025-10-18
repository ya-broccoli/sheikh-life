'use client';

import s from '../Section8.module.css';
import review1 from '@/assets/images/content/review1.png';
import review2 from '@/assets/images/content/review2.png';
import review3 from '@/assets/images/content/review3.png';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const ReviewsTab = () => {
    const reviews = [
        {
            id: 1,
            image: review1,
            name: 'Гусейн Гасанов',
            text: 'Обращайтесь в Sheikh’s Life, если хотите крутой отдых в Дубай!',
        },
        {
            id: 2,
            image: review2,
            name: 'Дмитрий Портнягин',
            text: 'Мероприятие клуб 500 нам организовывали Sheikh’s Life. Обращайтесь к ним и скажите, что от меня!',
        },
        {
            id: 3,
            image: review3,
            name: 'Яна Левенцева',
            text: 'Я в шоке от скорости работы и от того, как все организовано!',
        },
        {
            id: 4,
            image: review1,
            name: 'Гусейн Гасанов',
            text: 'Обращайтесь в Sheikh’s Life, если хотите крутой отдых в Дубай!',
        },
        {
            id: 5,
            image: review2,
            name: 'Дмитрий Портнягин',
            text: 'Мероприятие клуб 500 нам организовывали Sheikh’s Life. Обращайтесь к ним и скажите, что от меня!',
        },
        {
            id: 6,
            image: review3,
            name: 'Яна Левенцева',
            text: 'Я в шоке от скорости работы и от того, как все организовано!',
        },
    ];

    return (
        <div className={s.tabContainer}>
            <p className={s.title}>Отзывы</p>
            <div className={s.swiperContainer}>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={3}
                    loop={true}
                    className={s.swiper}
                >
                    {reviews.map((review) => (
                        <SwiperSlide key={review.id} className={s.swiperReviewSlide}>
                            <Image
                                src={review.image}
                                alt={review.name}
                                width={112}
                                height={112}
                                className={s.imageReview}
                            />
                            <p className={s.reviewName}>{review.name}</p>
                            <p className={s.reviewText}>{review.text}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

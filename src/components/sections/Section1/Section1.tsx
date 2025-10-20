'use client'

import * as React from 'react';
import {useState} from 'react';
import s from './Section1.module.css'
import common from '@/app/styles/common.module.css'
import Image from 'next/image'
import logo from '@/assets/images/svg/logo.svg'
import logoText from '@/assets/images/svg/logo_text.svg'
import buttonIcon from '@/assets/images/svg/buttonIcon.svg'
import buttonIcon2 from '@/assets/images/svg/buttonIcon2.svg'
import slide1 from '@/assets/images/svg/slider/slide1.svg';
import slide2 from '@/assets/images/svg/slider/slide2.svg';
import slide3 from '@/assets/images/svg/slider/slide3.svg';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {YouTubeVideo} from '@/components/ui/video/YouTubeVideo/YouTubeVideo';

// Данные для слайдов
const slides = [
    {
        id: 1,
        image: slide1,
        alt: 'slide1',
        text: 'Предвосхищаем даже самых<br/>изощренных. Создаем путешествия<br/>под отпечатки пальцев.'
    },
    {
        id: 2,
        image: slide2,
        alt: 'slide2',
        text: 'Познакомим с любимыми игрушками<br/>Шейхов. Открываем закрытые двери.<br/>Решаем сложные задачи'
    },
    {
        id: 3,
        image: slide3,
        alt: 'slide3',
        text: 'Опыт работы с богатыми людьми<br/>из списка Forbes, с семьями шейхов<br/>и президентов'
    }
]

type Props = {
    onOpenForm: () => void
}

export const Section1 = ({onOpenForm}: Props) => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false)

    return (
        <div className={s.section}>
            <div className={s.containerHeader}>
                <div className={s.header}>
                    <div className={s.contacts}>
                        <p className={s.heading1}>
                            <a href="tel:+7 (499) 286 80 02">+7 (499) 286 80 02</a>
                        </p>
                        <p className={s.heading2}>
                            <button className={s.callback}>Перезвоните мне</button>
                        </p>
                    </div>
                    <div className={s.logoContainer}>
                        <div className={s.logo}>
                            <Image src={logo} alt="Logo" width={60} height={48}/>
                        </div>
                        <div className={s.logoText}>
                            <Image src={logoText} alt="Logo-text" width={150} height={20}/>
                        </div>
                        <div className={s.languageSelect}>
                            {/*<LanguageSelect/>*/}
                        </div>
                    </div>
                    <div className={s.socials}>
                        <p className={s.heading1}>
                            <a href="tel:+97 155 398 0707">+97 155 398 0707</a>
                        </p>
                        <p className={s.heading2}>WhatsApp / Telergam</p>
                    </div>
                </div>
            </div>
            <div className={s.containerBanner}>
                <div className={s.banner}>
                    <div className={s.heroDescription}>
                        <h1 className={s.title}>
                            <span>Испытайте</span>
                            <br/>
                            Жизнь шейха
                            <br/>
                            <br/>
                        </h1>
                        <p className={s.description}>
                            Мы создали уникальную<br/>
                            программу путешествий<br/>
                            где вы сможете жить как<br/>
                            Шейх в статусе инкогнито<br/>
                            <br/>
                            <br/>
                            <br/>
                        </p>
                    </div>
                    <div className={s.videoContainer}>
                        <span className={s.counter}>01</span>
                        <div className={s.videoThumb}>
                            <div className={s.video}>
                                <YouTubeVideo
                                    videoId={'b0tAE8P2Tb4'}
                                    title="Как отдыхает Шейх?"
                                    isPlaying={isVideoPlaying}
                                    onPlay={() => setIsVideoPlaying(true)}
                                />
                            </div>
                            <div className={s.videoDescription}>
                                <p className={s.videoTitle}>Как отдыхает Шейх?</p>
                                <button className={s.playButton} onClick={() => setIsVideoPlaying(!isVideoPlaying)}>
                                    {isVideoPlaying ? 'Остановить видео' : 'Смотреть видео'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.containerFooter}>
                <p className={s.footerDescription}>
                    Мы создали уникальную<br/>
                    программу путешествий,<br/>
                    где вы сможете жить как<br/>
                    Шейх в статусе инкогнито.
                </p>
                <div className={s.application}>
                    <button className={s.applicationButton} onClick={onOpenForm}>
                        <Image src={buttonIcon} className={s.buttonIcon} alt="button icon" width={16} height={16}/>
                        Оставить заявку
                    </button>
                </div>
                <div className={s.slider}>
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        pagination={{clickable: true}}
                        autoplay={{delay: 4000, disableOnInteraction: false}}
                        loop={true}
                        className={s.swiper}
                    >
                        {slides.map((slide) => (
                            <SwiperSlide key={slide.id} className={s.swiperSlide}>
                                <Image
                                    src={slide.image}
                                    className={s.slideImage}
                                    alt={slide.alt}
                                    width={120}
                                    height={120}
                                />
                                <p dangerouslySetInnerHTML={{__html: slide.text}}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className={s.programs}>
                    <a href="#cases" className={s.programsLink}>
                        <Image src={buttonIcon2} className={s.buttonIcon} alt="button icon" width={16} height={16}/>
                        Выбрать программу
                    </a>
                </div>
            </div>
        </div>
    );
};

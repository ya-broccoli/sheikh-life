import * as React from 'react';
import s from './InfoModal.module.css'
import {CloseButton} from '@/components/ui/Button/CloseButton/CloseButton';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import {useState} from 'react';

type Props = {
    isOpen: boolean
    onClose: () => void
    slides: Array<{ id: number; content: React.ReactNode }>
    initialSlide?: number
    onOpenForm: () => void
}

type CaseProps = {
    onOpenForm?: () => void
}

export const InfoModal = ({ isOpen, onClose, slides, initialSlide = 0, onOpenForm }: Props) => {
    const [activeIndex, setActiveIndex] = useState(initialSlide)

    // Функция для клонирования контента с добавлением колбэка
    const slidesWithFormCallback = slides.map(slide => ({
        ...slide,
        content: React.cloneElement(slide.content as React.ReactElement<CaseProps>, {
            onOpenForm // ← передаем колбэк в каждый кейс
        })
    }))

    return (
        <div className={`${s.infoModal} ${isOpen ? s.open : ''}`}>
            <CloseButton onClick={onClose} />

            <div className={s.customPagination}>
                {activeIndex + 1} / {slides.length}
            </div>

            <div className={s.container}>
                <div className={s.sliderContainer}>
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={50}
                        slidesPerView={1}
                        initialSlide={initialSlide}
                        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                        className={s.swiper}
                    >
                        {slidesWithFormCallback.map((slide) => (
                            <SwiperSlide key={slide.id} className={s.slide}>
                                {slide.content}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

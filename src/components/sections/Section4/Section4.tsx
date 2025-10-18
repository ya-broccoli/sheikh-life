'use client'

import * as React from 'react';
import s from './Section4.module.css'
import buttonIcon from '@/assets/images/svg/buttonIcon.svg';
import Image from 'next/image';
import {YouTubeVideo} from '@/components/ui/video/YouTubeVideo/YouTubeVideo';
import {useState} from 'react';

type Props = {
    onOpenForm: () => void
}

export const Section4 = ({ onOpenForm }: Props) => {
    const [firstVideoPlaying, setFirstVideoPlaying] = useState(false)
    const [secondVideoPlaying, setSecondVideoPlaying] = useState(false)

    const toggleFirstVideo = () => {
        setFirstVideoPlaying(!firstVideoPlaying)
    }

    const toggleSecondVideo = () => {
        setSecondVideoPlaying(!secondVideoPlaying)
    }

    return (
        <div className={s.section} id="scenario">
            <div className={s.titleContainer}>
                <p className={s.title}>
                    Один из сценариев
                    <br/>
                    Жизни Шейха
                </p>
            </div>
            <div className={s.container}>
                <span className={s.counter}>04</span>
                <div className={s.block1}></div>
                <div className={s.block2}>
                    <div className={s.thumbContainer}>
                        <YouTubeVideo
                            title={'Тест-драйв жизни Шейха'}
                            videoId={'b0tAE8P2Tb4'}
                            isPlaying={firstVideoPlaying}
                            onPlay={() => setFirstVideoPlaying(true)}
                        />
                    </div>
                    <div className={s.buttonWrapper}>
                        <button
                            className={s.playButton}
                            onClick={toggleFirstVideo}
                            type="button"
                        >
                            {firstVideoPlaying ? 'Остановить видео' : 'Тест-драйв жизни шейха'}
                        </button>
                    </div>
                </div>
                <div className={s.block2}>
                    <div className={s.thumbContainer}>
                        <YouTubeVideo
                            title={"Промо Sheikh's Life"}
                            videoId={'lKo7oF8xVLM'}
                            isPlaying={secondVideoPlaying}
                            onPlay={() => setSecondVideoPlaying(true)}
                        />
                    </div>
                    <div className={s.buttonWrapper}>
                        <button
                            className={s.playButton}
                            onClick={toggleSecondVideo}
                            type="button"
                        >
                            {secondVideoPlaying ? 'Остановить видео' : 'Промо Sheikh\'s Life'}
                        </button>
                    </div>
                </div>
                <div className={s.block1}></div>
            </div>
            <div className={s.buttonContainer}>
                <button className={s.applicationButton} onClick={onOpenForm}>
                    <Image src={buttonIcon} className={s.buttonIcon} alt="button icon" width={16} height={16}/>
                    Хотите также?
                </button>
            </div>
        </div>
    );
};

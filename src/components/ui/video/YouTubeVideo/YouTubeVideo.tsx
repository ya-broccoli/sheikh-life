'use client'

import {useState} from 'react'
import s from './YouTubeVideo.module.css'
import {YouTubePlayButton} from '@/components/ui/Button/YouTubeButton/YouTubeButton';

type Props = {
    videoId: string
    title: string
    isPlaying?: boolean
    onPlay?: () => void
}

export const YouTubeVideo = ({videoId, title, isPlaying: externalIsPlaying, onPlay}: Props) => {
    const [internalIsPlaying, setInternalIsPlaying] = useState(false)

    // Используем внешнее состояние если передано, иначе внутреннее
    const isPlaying = externalIsPlaying !== undefined ? externalIsPlaying : internalIsPlaying

    const handlePlay = () => {
        setInternalIsPlaying(true)
        onPlay?.()
    }

    // Показываем превью до клика
    if (!isPlaying) {
        return (
            <div className={s.youtubeContainer}>
                {/* Превью-картинка */}
                <img
                    src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                    height={171}
                    alt={title}
                    className={s.videoPreview}
                />
                {/* Кнопка play */}
                <YouTubePlayButton onClick={handlePlay}  className={s.playButton} />
            </div>
        )
    }

    return (
        <div className={s.videoWrapper}>
            <iframe
                className={s.videoIframe}
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title={title}
                allow="autoplay; encrypted-media"
                allowFullScreen
            />
        </div>
    )
}

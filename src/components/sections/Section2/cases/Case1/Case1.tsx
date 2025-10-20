import * as React from 'react';
import s from '../Cases.module.css';
import item1 from '@/assets/images/content/cases/backgrounds/item1.jpg'
import Image from 'next/image';
import {YouTubeVideo} from '@/components/ui/video/YouTubeVideo/YouTubeVideo';

type Props = {
    onOpenForm?: () => void // ← добавляем опциональный пропс
}

export const Case1 = ({onOpenForm}: Props) => {
    return (
        <div className={s.container}>
            <div className={s.blockEmpty}></div>
            <div className={s.block}>
                <Image src={item1} alt="" width={370} height={186} className={s.image}/>
                <p className={s.title}>
                    1 день из жизни Шейха
                </p>
                <div className={s.videoThumb}>
                    <YouTubeVideo title={'День с подписчиком в Дубае'} videoId={'XM8c8xqrzlE'} />
                </div>
                <p className={s.description}>
                    Однажды к нам обратился Гусейн Гасанов. Он хотел сделать сюрприз для своего подписчика и устроить ему незабываемый день в Дубае.<br/>
                    Гусейн обратился к нам накануне ночью и попросил сделать что-нибудь сочное и интересное.<br/>
                    <br/>
                        Наша команда отреагировала весьма оперативно и вот что из этого вышло:<br/>
                        <br/>
                            1. Поехали в пустыню на суперкарах;<br/>
                            2. После покатались на багги;<br/>
                            3. Поплавали с акулами в Атлантисе;<br/>
                            4. Устроили шикарный ужин в знаменитом стейк-хаусе Nusr-Et, несмотря на то, что попасть туда без предварительного бронирования практически невозможно<br/>
                            <br/>
                                Порой задача удивить таких искушенных людей, как Гусейн кажется просто невыполнимой, но нам это удалось сделать за 1 день.<br/>
                                Ребята провели незабываемый день в Дубае и ощутили себя настоящими властелинами пустыни. Подробности смотрите в видеоролике.
                </p>
                <button className={s.formButton} onClick={onOpenForm}>Хотите также?</button>
            </div>
        </div>);
};
import * as React from 'react';
import s from '../Cases.module.css';
import item6 from '@/assets/images/content/cases/content/item6.jpg';
import Image from 'next/image';
import {YouTubeVideo} from '@/components/ui/video/YouTubeVideo/YouTubeVideo';

export const Case6 = () => {
    return (
        <div className={s.container}>
            <div className={s.blockEmpty}></div>
            <div className={s.block}>
                <Image src={item6} alt='' width={370} height={186} className={s.image}/>
                <p className={s.title}>
                    Организация дня рождения
                </p>
                <div className={s.videoThumb}>
                    <YouTubeVideo title={'Организация Дня Рождения в Дубае'} videoId={'KK_1lCAlJ2Y'} />
                </div>
                <p className={s.description}>
                    Нам представился случай сделать то, что мы хорошо умеем: организовать праздник для наших друзей - именинницы Светланы и её мужа Сергея.<br/>
                    <br/>
                        Нашим гостям хотелось ярких впечатлений, как в жизни настоящего шейха. Светлана хотела реализовать все «хотелки» внутренней богини, которая есть в каждой женщине. Девчонки, знакомо вам? Последнее, пожалуй, даже сложнее, но тоже выполнимо.<br/>
                        <br/>
                            В честь дня рождения Светланы мы организовали фееричную программу. Итак, рецепт хорошего дня рождения:<br/>
                            <br/>
                                Прогулка на чартерном вертолёте;<br/>
                                Катание на приватной яхте шейха;<br/>
                                Гидроциклы, сёрфинг;<br/>
                                Ужин в любимом ресторане шейха;<br/>
                                Караоке в конце вечера.<br/>
                                <br/>
                                    ! При этом арендовать яхту шейха и забронировать столик в греческом ресторане, где не бывает свободных мест - исключительно привилегии гостей Sheikhs Life.<br/>
                                    <br/>
                                        Мы очень гордимся тем, что нам удалось удивить наших гостей, сделать их праздник по-настоящему незабываемым. Мы готовы организовать любой ваш праздник по вашим предпочтениям и желаниям.
                </p>
                <button className={s.formButton}>Хотите также?</button>
            </div>
        </div>);
};

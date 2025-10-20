import * as React from 'react';
import s from '../Cases.module.css';
import item2 from '@/assets/images/content/cases/content/item2.jpg';
import Image from 'next/image';
import {YouTubeVideo} from '@/components/ui/video/YouTubeVideo/YouTubeVideo';

export const Case2 = () => {
    return (
        <div className={s.container}>
            <div className={s.blockEmpty}></div>
            <div className={s.block}>
                <Image src={item2} alt='' width={370} height={186} className={s.image}/>
                <p className={s.title}>
                    Выходные шейха
                </p>
                <div className={s.videoThumb}>
                    <YouTubeVideo title={'В ГОСТЯХ У ШЕЙХА'} videoId={'rLC3UpUWmBs'}/>
                </div>
                <p className={s.description}>
                    В нашем арсенале есть много вариантов программ на 1 день.<br/>
                    Но здесь стояла задача сделать целых три насыщенных дня.<br/>
                    <br/>
                    Главной целью нашего гостя – Субы, был прыжок с парашюта.<br/>
                    <br/>
                    Мы заранее забронировали полет, но из-за погоды, ветра, видимости никак не получалось это сделать,
                    каждый день нам что-то мешало.<br/>
                    Поэтому, чтобы компенсировать прыжок, нам пришлось сильно покреативить.<br/>
                    <br/>
                    В итоге мы сделали еще круче:<br/>
                    <br/>
                    1) Поехали в приватный зоопарк, доступ к которому есть только у элиты общества и куда нельзя попасть
                    через обычные тур.агентства;<br/>
                    2) Взяли 3 машины Rolls-Royce и 2 Lamborghini;<br/>
                    3) Покатались на супер-яхте, на ней был Sea Boat и Jet Ski;<br/>
                    4) Чтобы хоть как-то увидеть Дубай с высоты, наняли чартерный вертолет только для нас;<br/>
                    5) Жили в президентском номере Address с infinity pool на 77 этаже;<br/>
                    6) После чего сняли 2 номера suite в Burj Al Arab;<br/>
                    7) Далее мы получили необычный запрос от Субы сделать доброе дело - поехать в самый бедный район
                    Дубая, для того, чтобы раздать подарки бедным людям. Раздавая телефоны, айпады и часы, мы
                    столкнулись с тем, что его основной телефон со всем контентом, который мы записывали несколько дней,
                    украли. Наша команда быстро среагировала, вызвала полицию и мы в этот же день нашли телефон. Так что
                    все закончилось хэппи эндом.
                </p>
                <button className={s.formButton}>Хотите также?</button>
            </div>
        </div>);
};
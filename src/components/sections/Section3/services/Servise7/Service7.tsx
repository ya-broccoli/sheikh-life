import * as React from 'react';
import s from '../Services.module.css';
import Image from 'next/image';
import item1 from '@/assets/images/content/oneDay/item1.png';
import item2 from '@/assets/images/content/oneDay/item2.png';
import item3 from '@/assets/images/content/oneDay/item3.png';

type Props = {
    onOpenForm?: () => void
}

export const Service7 = ({onOpenForm}: Props) => {
    return (
        <div className={s.container}>
            <div className={s.blockEmpty}></div>
            <div className={s.block}>
                <p className={s.title}>
                    Один день из жизни Шейха
                </p>
                <ul className={s.list}>
                    <li className={s.item}>
                        <Image src={item1} alt="" width={370} height={246} className={s.image}/>
                        <p>
                            - Ловим волну на вейкборде<br/>
                            - Примеряем стиль Шейха<br/>
                            - Спешим на встречу с красной пустыней<br/>
                            - Бросаем вызов пескам<br/>
                            - Мчимся на багги<br/>
                            - Погружаемся в историю Эмиратов
                        </p>
                    </li>
                    <li className={s.item}>
                        <Image src={item2} alt="" width={370} height={246} className={s.image}/>
                        <p>
                            - Едем в соседний Эмират и открываем страницы восточной  сказки<br/>
                            - Скользим 1000 адреналиновых метров на спуске ZIP LINE<br/>
                            - Поднимаем крылья мечты (полет на маленьком самолетике)<br/>
                            - Вечер с панорамным видом на ночной Дубай<br/>
                        </p>
                    </li>
                    <li className={s.item}>
                        <Image src={item3} alt="" width={370} height={246} className={s.image}/>
                        <p>
                            Отправляемся в восьмое путешествие Синдбада на комфортной 60-футовой яхте<br/>
                            - Укрощаем волны на доске E-foil<br/>
                            - Почетно сопровождаем Вас в аэропорт
                        </p>
                    </li>
                </ul>
                <button className={s.formButton} onClick={onOpenForm}>Хотите также?</button>
            </div>
        </div>
    );
};

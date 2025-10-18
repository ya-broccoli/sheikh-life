import * as React from 'react';
import s from '../Services.module.css';
import Image from 'next/image';
import item1 from '@/assets/images/content/safari/item1.png';
import item2 from '@/assets/images/content/safari/item2.png';

type Props = {
    onOpenForm?: () => void
}

export const Service9 = ({onOpenForm}: Props) => {
    return (
        <div className={s.container}>
            <div className={s.blockEmpty}></div>
            <div className={s.block}>
                <p className={s.title}>
                    Шейхс сафари
                </p>
                <ul className={s.list}>
                    <li className={s.item}>
                        <Image src={item1} alt="" width={370} height={246} className={s.image}/>
                        <p>
                            - Забираем Вас на Rolls Royce CULLINAN<br/>
                            - Катаем на Супербаги в пустыне
                        </p>
                    </li>
                    <li className={s.item}>
                        <Image src={item2} alt="" width={370} height={246} className={s.image}/>
                        <p>
                            - Приватный ужин в топовом ресторане или пустыне<br/>
                            - Уникальная шоу-программа
                        </p>
                    </li>
                </ul>
                <button className={s.formButton} onClick={onOpenForm}>Хотите также?</button>
            </div>
        </div>
    );
};

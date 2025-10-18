import * as React from 'react';
import s from '../Services.module.css';
import Image from 'next/image';
import ahlan from '@/assets/images/content/airports/ahlan.png';
import ahlan2 from '@/assets/images/content/airports/ahlan2.png';
import marhaba from '@/assets/images/content/airports/marhaba.png';
import majlis from '@/assets/images/content/airports/majlis.png';
import majlis2 from '@/assets/images/content/airports/majlis2.png';

type Props = {
    onOpenForm?: () => void
}

export const Service5 = ({onOpenForm}: Props) => {
    return (
        <div className={s.container}>
            <div className={s.blockEmpty}></div>
            <div className={s.block}>
                <p className={s.title}>
                    Встреча в аэропорту
                </p>
                <ul className={s.list}>
                    <li className={s.item}>
                        <Image src={ahlan} alt="" width={370} height={246} className={s.image}/>
                        <p className={s.description}>
                            Ahlan <br/><br/>
                            Быстрое прохождение формальностей в сопровождении и с содействием Представителя услуги
                        </p>
                    </li>
                    <li className={s.item}>
                        <Image src={ahlan2} alt="" width={370} height={246} className={s.image}/>
                    </li>
                    <li className={s.item}>
                        <Image src={marhaba} alt="" width={370} height={246} className={s.image}/>
                        <p className={s.description}>
                            Marhaba <br/><br/>
                            Быстрый проход через весь аэропорт (от автомобиля до выхода на посадку) + ожидание посадки в зале Marhaba Lounge
                        </p>
                    </li>
                    <li className={s.item}>
                        <Image src={majlis} alt="" width={370} height={246} className={s.image}/>
                        <p className={s.description}>
                            Majlis<br/><br/>
                            Вас размещают в VIP-зале, в то время как сотрудники службы получают багаж и решают визовые формальности. Прямо от самолета Вас увозят не в терминал прилета, а в здание Al Majlis, и размещают в одной из отдельных VIP-комнат.
                        </p>
                    </li>
                    <li className={s.item}>
                        <Image src={majlis2} alt="" width={370} height={246} className={s.image}/>
                    </li>
                </ul>
                <button className={s.formButton} onClick={onOpenForm}>Хотите также?</button>
            </div>
        </div>
    );
};


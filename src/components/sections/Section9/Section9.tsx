import * as React from 'react';
import s from '@/components/sections/Section9/Section9.module.css';
import Image from 'next/image';
import item1 from '@/assets/images/svg/reasons/item1.svg'
import item2 from '@/assets/images/svg/reasons/item2.svg'
import item3 from '@/assets/images/svg/reasons/item3.svg'
import item4 from '@/assets/images/svg/reasons/item4.svg'
import item5 from '@/assets/images/svg/reasons/item5.svg'
import item6 from '@/assets/images/svg/reasons/item6.svg'

export const Section9 = () => {
    return (
        <div className={s.section} id="why">
            <div className={s.container}>
                <p className={s.title}>Почему выбирают Sheikh's Life?</p>
                <span className={s.counter}>09</span>
                <div className={s.reasonsContainer}>
                    <div className={s.reason}>
                        <Image src={item1} alt="" width={80} height={80} className={s.image}/>
                        <p>
                            Мы понимаем разницу между
                            <br/>
                            богатыми и очень богатыми
                            <br/>
                            людьми и их стандартами
                        </p>
                    </div>
                    <div className={s.reason}>
                        <Image src={item2} alt="" width={80} height={80} className={s.image}/>
                        <p>
                            Готовы предложить клиенту
                            <br/>
                            более 100 уникальных
                            <br/>
                            сценариев отдыха
                        </p>
                    </div>
                    <div className={s.reason}>
                        <Image src={item3} alt="" width={80} height={80} className={s.image}/>
                        <p>
                            Берем на себя всю
                            <br/>
                            ответственность и не задаем
                            <br/>
                            лишних вопросов
                        </p>
                    </div>
                    <div className={s.reason}>
                        <Image src={item4} alt="" width={80} height={80} className={s.image}/>
                        <p>
                            Мы являемся прямыми
                            <br/>
                            поставщиками услуг
                            <br/>
                            и базируемся в Дубае
                        </p>
                    </div>
                    <div className={s.reason}>
                        <Image src={item5} alt="" width={80} height={80} className={s.image}/>
                        <p>
                            Имеем многолетний опыт
                            <br/>
                            работы с людьми из списка
                            <br/>
                            Forbes
                        </p>
                    </div>
                    <div className={s.reason}>
                        <Image src={item6} alt="" width={80} height={80} className={s.image}/>
                        <p>
                            Взаимодействуем
                            <br/>
                            с семьями шейхов
                            <br/>
                            и президентов
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};
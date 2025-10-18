import * as React from 'react';
import s from '@/components/sections/Section5/Section5.module.css';
import Image from 'next/image';
import arrow from '@/assets/images/svg/instructions/arrow.svg';
import item1 from '@/assets/images/svg/instructions/item1.svg';
import item2 from '@/assets/images/svg/instructions/item2.svg';
import item3 from '@/assets/images/svg/instructions/item3.svg';
import item4 from '@/assets/images/svg/instructions/item4.svg';
import item5 from '@/assets/images/svg/instructions/item5.svg';
import item6 from '@/assets/images/svg/instructions/item6.svg';
import buttonIcon from '@/assets/images/svg/buttonIcon.svg';

type Props = {
    onOpenForm: () => void
}

export const Section5 = ({ onOpenForm }: Props) => {
    return (
        <div className={s.section} id="howto">
            <div className={s.container}>
                <p className={s.title}>Как стать шейхом? <br /> Подробная инструкция</p>
                <p className={s.counter}>05</p>
            </div>
            <div className={s.container}>
                <div className={s.instructionsItem}>
                    <div className={s.imageContainer}>
                        <Image src={item1} alt="" width={80} height={80} className={s.image}/>
                        <Image src={arrow} alt="" width={32} height={80} className={s.arrow}/>
                    </div>
                    <p>
                        Вы оставляете
                        <br/>
                        заявку на этом
                        <br/>
                        сайте в экране
                        <br/>
                        ниже
                    </p>
                </div>
                <div className={s.instructionsItem}>
                    <div className={s.imageContainer}>
                        <Image src={item2} alt="" width={80} height={80} className={s.image}/>
                        <Image src={arrow} alt="" width={32} height={80} className={s.arrow}/>
                    </div>
                    <p>
                        Наш менеджер с
                        <br/>
                        вами связывается
                        <br/>
                        и узнает ваши
                        <br/>
                        пожелания
                    </p>
                </div>
                <div className={s.instructionsItem}>
                    <div className={s.imageContainer}>
                        <Image src={item3} alt="" width={80} height={80} className={s.image}/>
                        <Image src={arrow} alt="" width={32} height={80} className={s.arrow}/>
                    </div>
                    <p>
                        Мы подбираем
                        <br/>
                        вам программу
                        <br/>
                        отдыха
                        <br/>
                        и отправляем КП
                    </p>
                </div>
                <div className={s.instructionsItem}>
                    <div className={s.imageContainer}>
                        <Image src={item4} alt="" width={80} height={80} className={s.image}/>
                        <Image src={arrow} alt="" width={32} height={80} className={s.arrow}/>
                    </div>
                    <p>
                        Подписываем
                        <br/>
                        договор, и вы
                        <br/>
                        осуществляете
                        <br/>
                        оплату тура
                    </p>
                </div>
                <div className={s.instructionsItem}>
                    <div className={s.imageContainer}>
                        <Image src={item5} alt="" width={80} height={80} className={s.image}/>
                        <Image src={arrow} alt="" width={32} height={80} className={s.arrow}/>
                    </div>
                    <p>
                        Наши
                        <br/>
                        представители
                        <br/>
                        встречают вас
                        <br/>
                        в Дубае как
                        <br/>
                        Шейха
                    </p>
                </div>
                <div className={s.instructionsItem}>
                    <div className={s.imageContainer}>
                        <Image src={item6} alt="" width={80} height={80} className={s.image}/>
                    </div>
                    <p>
                        С этого момента
                        <br/>
                        вам открывается
                        <br/>
                        мир арабской
                        <br/>
                        сказки!
                    </p>
                </div>
            </div>
            <div className={s.container}>
                <button className={s.applicationButton} onClick={onOpenForm}>
                    <Image src={buttonIcon} className={s.buttonIcon} alt="button icon" width={16} height={16}/>
                    Оставить заявку
                </button>
            </div>
        </div>
    );
};
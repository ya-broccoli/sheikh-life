import * as React from 'react';
import s from '../Services.module.css';
import Image from 'next/image';
import hotel1 from '@/assets/images/content/hotels/hotel1.png';
import hotel2 from '@/assets/images/content/hotels/hotel2.png';
import hotel3 from '@/assets/images/content/hotels/hotel3.png';
import hotel4 from '@/assets/images/content/hotels/hotel4.png';
import hotel5 from '@/assets/images/content/hotels/hotel5.png';
import hotel6 from '@/assets/images/content/hotels/hotel6.png';
import hotel7 from '@/assets/images/content/hotels/hotel7.png';
import hotel8 from '@/assets/images/content/hotels/hotel8.png';
// import hotel9 from '@/assets/images/content/hotels/hotel9.png';
import hotel10 from '@/assets/images/content/hotels/hotel10.png';
import hotel11 from '@/assets/images/content/hotels/hotel11.png';
import hotel12 from '@/assets/images/content/hotels/hotel12.png';
import hotel13 from '@/assets/images/content/hotels/hotel13.png';
import hotel14 from '@/assets/images/content/hotels/hotel14.png';
import hotel15 from '@/assets/images/content/hotels/hotel15.png';
import hotel16 from '@/assets/images/content/hotels/hotel16.png';
import hotel17 from '@/assets/images/content/hotels/hotel17.png';
import hotel18 from '@/assets/images/content/hotels/hotel18.png';
import hotel19 from '@/assets/images/content/hotels/hotel19.png';
import hotel20 from '@/assets/images/content/hotels/hotel20.png';
import hotel21 from '@/assets/images/content/hotels/hotel21.png';
import hotel22 from '@/assets/images/content/hotels/hotel22.png';
import hotel23 from '@/assets/images/content/hotels/hotel23.png';
import hotel24 from '@/assets/images/content/hotels/hotel24.png';
import hotel25 from '@/assets/images/content/hotels/hotel25.png';
import hotel26 from '@/assets/images/content/hotels/hotel26.png';
import hotel27 from '@/assets/images/content/hotels/hotel27.png';
import hotel28 from '@/assets/images/content/hotels/hotel28.png';
import hotel29 from '@/assets/images/content/hotels/hotel29.png';
import hotel30 from '@/assets/images/content/hotels/hotel30.png';

type Props = {
    onOpenForm?: () => void
}

export const Service1 = ({onOpenForm}: Props) => {
    return (
        <div className={s.container}>
            <div className={s.blockEmpty}></div>
            <div className={s.block}>
                <p className={s.title}>
                    Отели со скидкой
                </p>
                <p className={s.description}>
                    Мы работаем напрямую с отелями и у нас есть персональные скидки от 5 до 40 % (те кто, обещают больше, скорее всего мошенники!)
                </p>
                <ul className={s.list}>
                    <li className={s.item}>
                        <Image src={hotel1} alt="" width={350} height={232} className={s.image}/>
                        <p>
                            Бурдж Аль Араб<br/><br/>
                            Адрес:&nbsp;شارع جميرا، - Umm<br/> Suqeim 3 - Dubai - ОАЭ
                        </p>
                    </li>
                    <li className={s.item}>
                        <Image src={hotel2} alt="" width={350} height={232} className={s.image}/>
                        <p>
                            Алькасар Мадинат Джумейра<br/><br/>
                            Адрес:&nbsp;Madinat Jumeirah - King Salman Bin Abdulaziz Al Saud St - Umm Suqeim - Dubai -
                            ОАЭ
                        </p>
                    </li>
                    <li className={s.item}>
                        <Image src={hotel3} alt="" width={350} height={232} className={s.image}/>
                        <p>
                            Дар Аль Масьяф Мадинат Джумейра<br/><br/>
                            Адрес:&nbsp;Madinat Jumeirah - King Salman Bin Abdulaziz Al Saud St - Al Sufouh 1 - Dubai
                        </p>
                    </li>
                    <li className={s.item}>
                        <Image src={hotel4} alt="" width={350} height={232} className={s.image}/>
                        <p>
                            Аль Насим Мадинат Джумейра<br/><br/>
                            Адрес:&nbsp;Al Sufouh 1 - Dubai - ОАЭ
                        </p>
                    </li>
                    <li className={s.item}>
                        <Image src={hotel5} alt="" width={350} height={232} className={s.image}/>
                        <p>
                            Джумейра Мина А Cалам<br/><br/>
                            Адрес:&nbsp;Jumeirah St - Madinat Jumeirah - Umm Suqeim 3 - Dubai - ОАЭ
                        </p>
                    </li>
                    <li className={s.item}>
                        <Image src={hotel6} alt="" width={350} height={232} className={s.image}/>
                        <p>
                            Джумейра Бич Отель<br/><br/>
                            Адрес:&nbsp;Jumeirah St - Umm Suqeim - Umm Suqeim 3 - Dubai
                        </p>
                    </li>
                    <li className={s.item}>
                        <Image src={hotel7} alt="" width={350} height={232} className={s.image}/>
                        <p>
                            Бейт Аль Бахар<br/><br/>
                            Адрес : Umm Suqeim - Umm Suqeim 3 - Дубай - ОАЭ
                        </p>
                    </li>
                    <li className={s.item}>
                        <Image src={hotel8} alt="" width={350} height={232} className={s.image}/>
                        <p>
                            Атлантис отель<br/><br/>
                            Адрес: Crescent Rd - The Palm Jumeirah - Dubai - ОАЭ
                        </p>
                    </li>
                    <li className={s.item}>
                        <Image src={hotel8} alt="" width={350} height={232} className={s.image}/>
                        <p>
                            Ван энд Онли Роял Мираж<br/><br/>
                            Адрес: King Salman Bin Abdulaziz Al Saud St - Dubai Marina - Dubai - ОАЭ
                        </p>
                    </li>
                    <li className={s.item}>
                        <Image src={hotel10} alt="" width={350} height={232} className={s.image}/>
                        <p>
                            Малакия виллас<br/><br/>
                            Адрес:&nbsp;Al Sufouh 1 - Dubai - ОАЭ
                        </p>
                    </li>
                    <li className={s.item}>
                        <Image src={hotel11} alt="" width={350} height={232} className={s.image}/>
                        <p>
                            Армани отель<br/><br/>
                            Адрес: Burj Khalifa - Sheikh Mohammed bin Rashid Blvd - Downtown Dubai - Dubai
                        </p>
                    </li>
                    <li className={s.item}>
                        <Image src={hotel12} alt="" width={350} height={232} className={s.image}/>
                        <p>
                            Ван энд Онли зе Палм<br/><br/>
                            Адрес: West Crescent, Palm - Jumeirah - Dubai - ОАЭ
                        </p>
                    </li>
                    <li className={s.item}>
                        <Image src={hotel13} alt="" width={370} height={246} className={s.image}/>
                        <p>
                            Джумейра Забель Сарай<br/><br/>
                            Адрес : Crescent Rd - The Palm Jumeirah - Dubai - ОАЭ
                        </p>
                    </li>
                    <li className={s.item}>
                        <Image src={hotel14} alt="" width={370} height={246} className={s.image}/>
                        <p>
                            Софитель Зе Палм Лакшери Виллас<br/><br/>
                            Адрес: East Crescent Palm - Jumeirah - Dubai - ОАЭ
                        </p>
                    </li>
                    <li className={s.item}>
                        <Image src={hotel15} alt="" width={370} height={246} className={s.image}/>
                        <p>
                            Булгари Резорт<br/><br/>
                            Адрес: Jumeirah Bay Island - Dubai - ОАЭ
                        </p>
                    </li>
                    <li className={s.item}>
                        <Image src={hotel16} alt="" width={370} height={246} className={s.image}/>
                        <p>
                            Мандарин Ориентал Джумейра<br/><br/>
                            Адрес:&nbsp;Jumeirah Beach Rd - Jumeirah - Jumeirah 1 - Dubai - ОАЭ
                        </p>
                    </li>
                    <li className={s.item}>
                        <Image src={hotel17} alt="" width={370} height={246} className={s.image}/>
                        <p>
                            Фор Сизонс<br/><br/>
                            Адрес: 2 Jumeirah St - Jumeirah - Jumeirah 2 - Dubai - ОАЭ
                        </p>
                    </li>
                    <li className={s.item}>
                        <Image src={hotel18} alt="" width={370} height={246} className={s.image}/>
                        <p>
                            Цезарь Палас<br/><br/>
                            Адрес: Caesars Palace - Bluewaters Island - Dubai - ОАЭ
                        </p>
                    </li>
                    <li className={s.item}>
                        <Image src={hotel19} alt="" width={370} height={246} className={s.image}/>
                        <p>
                            Дабл Ю<br/><br/>
                            Адрес : West Crescent Palm - Jumeirah - Dubai - ОАЭ
                        </p>
                    </li>
                    <li className={s.item}>
                        <Image src={hotel20} alt="" width={370} height={246} className={s.image}/>
                        <p>
                            Риксос Джумейра<br/><br/>
                            Адрес: Jbr - The Walk - Al Mamsha St - Jumeirah Beach Residence - Dubai - ОАЭ
                        </p>
                    </li>
                    <li className={s.item}>
                        <Image src={hotel21} alt="" width={370} height={246} className={s.image}/>
                        <p>
                            Адресс Бич Резорт<br/><br/>
                            Адрес: Address Beach Resort - The Walk - Jumeirah Beach Residence - Dubai - ОАЭ
                        </p>
                    </li>
                    <li className={s.item}>
                        <Image src={hotel22} alt="" width={370} height={246} className={s.image}/>
                        <p>
                            Адресс Даунтаун<br/><br/>
                            Адрес:Sheikh Mohammed bin Rashid Blvd - Downtown Dubai - Dubai - ОАЭ
                        </p>
                    </li>
                    <li className={s.item}>
                        <Image src={hotel23} alt="" width={370} height={246} className={s.image}/>
                        <p>
                            Адресс Бульвар<br/><br/>
                            Адрес: 21447 - Sheikh Mohammed bin Rashid Blvd - Downtown Dubai - Dubai - ОАЭ
                        </p>
                    </li>
                    <li className={s.item}>
                        <Image src={hotel24} alt="" width={370} height={246} className={s.image}/>
                        <p>
                            Адресс Скай Вью<br/><br/>
                            Адрес: Emaar Square Area, Downtown Dubai 111969 - Dubai - ОАЭ
                        </p>
                    </li>
                    <li className={s.item}>
                        <Image src={hotel25} alt="" width={370} height={246} className={s.image}/>
                        <p>
                            Вальдорф Астория<br/><br/>
                            Адрес:Viena St - Al Hamra Village - Ras al Khaimah - ОАЭ
                        </p>
                    </li>
                    <li className={s.item}>
                        <Image src={hotel26} alt="" width={370} height={246} className={s.image}/>
                        <p>
                            Анантара Зе Палм<br/><br/>
                            Адрес: East Crescent, Palm - Dubai - ОАЭ
                        </p>
                    </li>
                    <li className={s.item}>
                        <Image src={hotel27} alt="" width={370} height={246} className={s.image}/>
                        <p>
                            Джумейра Эмирейтс Тауэрс<br/><br/>
                            Адрес: Sheikh Zayed Rd - Trade Centre - Trade Centre 2 - Dubai - ОАЭ
                        </p>
                    </li>
                    <li className={s.item}>
                        <Image src={hotel28} alt="" width={370} height={246} className={s.image}/>
                        <p>
                            Кемпински Палм Джумейра<br/><br/>
                            Адрес: Crescent West, Palm - Dubai - ОАЭ
                        </p>
                    </li>
                    <li className={s.item}>
                        <Image src={hotel29} alt="" width={370} height={246} className={s.image}/>
                        <p>
                            Раффлс зе Палм<br/><br/>
                            Адрес: &nbsp;West Cresent Palm - Jumeirah - Dubai - ОАЭ
                        </p>
                    </li>
                    <li className={s.item}>
                        <Image src={hotel30} alt="" width={370} height={246} className={s.image}/>
                        <p>
                            Ритц Карлтон<br/><br/>
                            Адрес: Jumeirah Beach Residence - Dubai - ОАЭ
                        </p>
                    </li>
                </ul>
                <button className={s.formButton} onClick={onOpenForm}>Хотите также?</button>
            </div>
        </div>
    );
};


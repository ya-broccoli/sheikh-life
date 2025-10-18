import * as React from 'react';
import s from '../Services.module.css';
import Image from 'next/image';
import love from '@/assets/images/content/love.png';

type Props = {
    onOpenForm?: () => void
}

export const Service8 = ({onOpenForm}: Props) => {
    return (
        <div className={s.container}>
            <div className={s.blockEmpty}></div>
            <div className={s.block}>
                <p className={s.title}>
                    Один день из жизни Шейха
                </p>
                <p className={s.description}>
                    Наша команда креативщиков придумает вам самый уникальный сценарий для предложения руки и сердца!<br/>
                    <br/>
                        Вот примеры некоторых из них:<br/>
                        <br/>
                            1. На вертолётной площадке Бурдж Аль Араба;<br/>
                            2. Со знаменитым певцом, если Ваша история любви связана с песней;<br/>
                            3. На берегу моря;<br/>
                            4.  В аквариуме с аквалангистами с плакатом “Выходи за меня”;<br/>
                            5. Предложение с текстом на Бурдж Халифе;<br/>
                            6. Запуск гирожира с вопросом “выйдешь за меня?”<br/>
                            <br/>
                                И множество других вариантов.<br/>
                                <br/>
                                    Мы гарантируем сделать этот день максимально запоминающимся и неповторимым, вам не нужно будет думать, где и как , ваша задача - просто прийти, взяв свою девушку.
                </p>
                <ul className={s.list}>
                    <li className={s.item}>
                        <Image src={love} alt="" width={370} height={246} className={s.image}/>
                        <p>
                            Наша задача – узнать историю любви пары и скреативить, исходя из этого, уникальное предложение.
                        </p>
                    </li>
                </ul>
                <button className={s.formButton} onClick={onOpenForm}>Хотите также?</button>
            </div>
        </div>
    );
};

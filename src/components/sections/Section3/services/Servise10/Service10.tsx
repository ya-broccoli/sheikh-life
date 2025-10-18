import * as React from 'react';
import s from '../Services.module.css';
import Image from 'next/image';
import item1 from '@/assets/images/content/inTheAir/item1.png';
import item2 from '@/assets/images/content/inTheAir/item2.png';
import item3 from '@/assets/images/content/inTheAir/item3.png';
import item5 from '@/assets/images/content/inTheAir/item5.png';

type Props = {
    onOpenForm?: () => void
}

export const Service10 = ({onOpenForm}: Props) => {
    return (
        <div className={s.container}>
            <div className={s.blockEmpty}></div>
            <div className={s.block}>
                <p className={s.title}>
                    Шейх в воздухе
                </p>
                <ul className={s.list}>
                    <li className={s.item}>
                        <Image src={item1} alt="" width={370} height={246} className={s.image}/>
                        <p>
                            1. Sky Dive – полет в тандеме с инструктором со средней скоростью 200 км/час. Это 4 км в
                            небе Дубая после 60-секундного свободного падения.
                        </p>
                    </li>
                    <li className={s.item}>
                        <Image src={item2} alt="" width={370} height={246} className={s.image}/>
                        <p>
                            2. Полет на вертолете – возможность увидеть Дубай с высоты, полюбоваться на знаковые
                            достопримечательности, очерчивающие горизонт, на вертолетной экскурсии.
                        </p>
                    </li>
                    <li className={s.item}>
                        <Image src={item3} alt="" width={370} height={246} className={s.image}/>
                        <p>
                            3. Sea Plane – это полет на гидросамолете на высоте 460 метров над уровнем моря с панорамными видами на небоскребы, пляжи и архитектурные комплексы Дубая.
                        </p>
                    </li>
                    <li className={s.item}>
                        <Image src={item3} alt="" width={370} height={246} className={s.image}/>
                        <p>
                            4. Парамотор — силовая установка, включающая небольшой двигатель с воздушным винтом, используемая для полётов на параплане. Полет осуществляется в пустыне над песчаными дюнами.
                        </p>
                    </li>
                    <li className={s.item}>
                        <Image src={item5} alt="" width={370} height={246} className={s.image}/>
                        <p>
                            5. Гирокоптер - небольшое воздушное судно, внешне напоминающее вертолет. Маршрут полета пролегает вдоль побережья, предоставляя возможность насладиться видами самых знаковых достопримечательностей Дубая
                        </p>
                    </li>
                    <li className={s.item}>
                        <Image src={item5} alt="" width={370} height={246} className={s.image}/>
                        <p>
                            6. Полет на воздушном шаре.<br/>
                            Как только вы подниметесь в воздух, ночная мгла над горизонтом начнёт преображаться в красивые оттенки жёлтого и оранжевого. В зависимости от того ,в какую сторону вы смотрите, вы сможете увидеть, как аравийское солнце встаёт из-за Хаджарских гор над дюнами.
                        </p>
                    </li>
                </ul>
                <button className={s.formButton} onClick={onOpenForm}>Хотите также?</button>
            </div>
        </div>
    );
};

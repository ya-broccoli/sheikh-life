import * as React from 'react';
import s from '@/components/sections/Section3/Section3.module.css';
import item1 from '@/assets/images/svg/services/item1.svg';
import item2 from '@/assets/images/svg/services/item2.svg';
import item3 from '@/assets/images/svg/services/item3.svg';
import item4 from '@/assets/images/svg/services/item4.svg';
import item5 from '@/assets/images/svg/services/item5.svg';
import item6 from '@/assets/images/svg/services/item6.svg';
import item7 from '@/assets/images/svg/services/item7.svg';
import item8 from '@/assets/images/svg/services/item8.svg';
import item9 from '@/assets/images/svg/services/item9.svg';
import item10 from '@/assets/images/svg/services/item10.svg';
import {ServiceItem} from '@/components/sections/Section3/ServiceItem/ServiceItem';

type Props = {
    onOpenService: (serviceId: number) => void
}

export const Section3 = ({onOpenService}: Props) => {
    const services = [
        {
            id: 301,
            image: item1,
            title: 'Отели со скидкой',
            description: 'Мы работаем с 5* гостиницами, которые предоставляют нам “вкусные”, более привлекательные цены, чем на онлайн ресурсах.'
        },
        {
            id: 302,
            image: item2,
            title: 'Личный водитель',
            description: 'Мы продумаем всю логистику поминутно, ваш водитель уже будет ждать у парадного выхода. Вам не нужно будет беспокоиться о том, как перемещаться по городу.'
        },
        {
            id: 303,
            image: item3,
            title: 'Аренда суперкара',
            description: 'Найдем для вас автомобиль мечты и подадим его вовремя.'
        },
        {
            id: 304,
            image: item4,
            title: 'Аренда яхты',
            description: 'В нашем распоряжении есть супер-яхты, которые не доступны для общего пользования.'
        },
        {
            id: 305,
            image: item5,
            title: 'Встреча и проводы в аэропорту',
            description: 'Помимо фаст трека, мы встретим вас с трапа на отдельной машине и повезём в VIP-терминал для прохождения упрощённых формальностей.'
        },
        {
            id: 306,
            image: item6,
            title: 'Бронирование столиков',
            description: 'У нас тёплые отношения с топовыми ресторанами Дубая и со своей стороны мы всегда сделаем все возможное для наших гостей, чтобы забронировать лучший столик.'
        },
        {
            id: 307,
            image: item7,
            title: 'Один день из жизни шейха',
            description: 'Вы получите уникальный опыт, потому что каждая история для нас – это новый челлендж, в котором мы стараемся превзойти сами себя.'
        },
        {
            id: 308,
            image: item8,
            title: 'Предложение руки и сердца',
            description: 'Мы сделаем так, чтобы это событие стало для вас уникальным и неповторимым, решим все организационные нюансы.'
        },
        {
            id: 309,
            image: item9,
            title: 'Шейхс сафари',
            description: 'Мы прокатимся на заряженных buggy фрирайдом, после заката посетим заповедные и любимые места Шейха.'
        },
        {
            id: 310,
            image: item10,
            title: 'Шейх в воздухе',
            description: 'Прайвет жет, чартерные полёты на вертолётах, воздушный шар и другие полёты тоже включены.'
        },
    ];

    return (
        <div className={s.section} id="services">
            <div className={s.servicesWrapper}>
                <div>
                    <h2 className={s.title}>Услуги</h2>
                    <span className={s.counter}>03</span>
                </div>
                <ul className={s.servicesList}>
                    {services.map((service) => (
                        <ServiceItem
                            key={service.id}
                            id={service.id}
                            image={service.image}
                            title={service.title}
                            description={service.description}
                            onOpenService={onOpenService}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};

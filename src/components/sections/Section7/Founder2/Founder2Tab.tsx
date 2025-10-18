import Image from 'next/image';
import vikVal from '@/assets/images/content/vikVal.jpg'
import s from '../Section7.module.css'
import {InstagramFilledIcon} from '@/components/ui/icons/Instagram/InstagramFilledIcon';

export const ViktoriaContent = () => (
    <div className={s.tabContent}>
        <div className={s.imageWrapper}>
            <Image
                src={vikVal}
                className={s.founderImage}
                alt="Валерия Закелова и Виктория Закелова"
                width={314}
                height={400}
            />
        </div>

        <div className={s.description}>
            <p>
                Нас зовут Валерия и Виктория. Мы сооснователи компании Sheikh’s Life. Родом из Москвы и уже 10 лет живём
                и работаем в Дубае. Более 15 лет мы занимаемся туризмом, организовывая качественный отдых по всему миру.
                У нас два высших образования в сфере туризма и управления, более 10 лет опыта в бизнесе и продвижении.
                Сооснователями проекта Sheikh’s Life мы стали в 2018 году, который постепенно вырос в мощный и
                интересный международный проект.
            </p>
            <a href={''} className={s.socialLink}>
                <InstagramFilledIcon className={s.instaIcon} width={16} height={16}/>
                Instagram
            </a>
        </div>
    </div>
);
import Image from 'next/image';
import akhror from '@/assets/images/content/akhror.jpg'
import s from '../Section7.module.css'
import {InstagramFilledIcon} from '@/components/ui/icons/Instagram/InstagramFilledIcon';

export const AkhrorContent = () => (
    <div className={s.tabContent}>
        <div className={s.imageWrapper}>
            <Image
                src={akhror}
                className={s.founderImage}
                alt="Axpop Рахимбаев"
                width={314}
                height={400}
            />
        </div>
        <div className={s.descriptionA}>
            <p>
                Меня зовут Ахрор, я основатель компании Sheikh’s Life. Мне 36 лет. Я родился в
                Ташкенте, а с 2004 года живу в Арабских эмиратах. Окончил магистратуру МГУ. У меня
                получилось пройти путь от бармена с сомнительной визой до владельца собственного
                туристического бизнеса в ОАЭ. Поэтому я хорошо понимаю, насколько важно в жизни
                реализоваться. Я достиг всего упорным трудом, верой в себя и стремлением к роскошной
                жизни. С удовольствием занимаюсь любимым делом и являюсь проводником к Вашим
                желаниям.
            </p>
            <a href={''} className={s.socialLink}>
                <InstagramFilledIcon className={s.instaIcon} width={16} height={16}/>
                Instagram
            </a>
        </div>
    </div>
);
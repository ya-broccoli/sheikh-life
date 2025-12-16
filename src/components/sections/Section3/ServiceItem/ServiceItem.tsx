import Image, {StaticImageData} from 'next/image';
import {useState} from 'react';
import s from '../Section3.module.css'

type Props = {
    id: number
    image: StaticImageData
    title: string
    description: string
    onOpenService: (serviceId: number) => void
}

export const ServiceItem = ({ id, image, title, description, onOpenService }: Props) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleDetailsClick = (e: React.MouseEvent) => {
        e.stopPropagation()
        onOpenService(id)
    }

    return (
        <li
            className={`${s.servicesItem} ${isFlipped ? s.flipped : ''}`}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            {/* Лицевая сторона */}
            <div className={`${s.serviceItemOne} ${isFlipped ? s.hidden : s.visible}`}>
                <Image src={image} alt='Service icon' width={70} height={70} className={s.image}/>
                <h3 className={s.serviceTitle}>{title}</h3>
            </div>

            {/* Обратная сторона */}
            <div className={`${s.serviceItemTwo} ${isFlipped ? s.visible : s.hidden}`}>
                <p className={s.serviceItemDescription}>{description}</p>
                <button
                    className={s.serviceItemBtn}
                    onClick={handleDetailsClick}
                >
                    Подробнее
                </button>
            </div>
        </li>
    );
};

import * as React from 'react';
import s from './MainMenu.module.css'
import Image from 'next/image';
import instargam from '@/assets/images/svg/socials/instagram.svg'
import telegram from '@/assets/images/svg/socials/telegram.svg'
import whatsApp from '@/assets/images/svg/socials/whatsApp.svg'
import {CloseButton} from '@/components/ui/Button/CloseButton/CloseButton';

type Props = {
    isOpen: boolean
    onClose: () => void
}

export const MainMenu = ({isOpen, onClose}: Props) => {

    return (
        <div className={`${s.mainMenu} ${isOpen ? s.open : ''}`}>
            <CloseButton onClick={onClose}/>
            <div className={s.container}>
                <div className={s.navBlock}>
                    <ul className={s.navList}>
                        <li className={s.navItem}>
                            <a href="#" onClick={onClose}>Начало</a>
                        </li>
                        <li className={s.navItem}>
                            <a href="#cases" onClick={onClose}>Кейсы</a>
                        </li>
                        <li className={s.navItem}>
                            <a href="#services" onClick={onClose}>Услуги</a>
                        </li>
                        <li className={s.navItem}>
                            <a href="#scenario" onClick={onClose}>Сценарии</a>
                        </li>
                        <li className={s.navItem}>
                            <a href="#howto" onClick={onClose}>Как стать Шейхом?</a>
                        </li>
                        <li className={s.navItem}>
                            <a href="#who" onClick={onClose}>Основатель проекта</a>
                        </li>
                        <li className={s.navItem}>
                            <a href="#reviews" onClick={onClose}>Отзывы</a>
                        </li>
                        <li className={s.navItem}>
                            <a href="#why" onClick={onClose}>Почему мы?</a>
                        </li>
                    </ul>
                </div>
                <div className={s.blockEmpty}></div>
                <div className={s.contactsBlock}>
                    <div>
                        <p className={s.heading1}>
                            <a href="https://web.archive.org/web/20230608130059/tel:+7 (499) 286 80 02">+7 (499) 286 80
                                02
                            </a>
                        </p>
                        <p className={s.heading2}>
                            <button className={s.callback}
                            >Перезвоните мне
                            </button>
                        </p>
                    </div>
                    <div className={s.wrapper}>
                        <p className={s.heading1}>
                            <a href="https://web.archive.org/web/20230608130059/tel:+97 155 398 0707 ">+97
                                155 398 0707
                            </a>
                        </p>
                        <p className={s.heading2}>WhatsApp / Telegram</p>
                    </div>
                </div>
            </div>
            <div className={s.container}>
                <div className={s.socialBlock}>
                    <div className={s.block}>
                        <button className={s.policy} type="button"
                        >
                            Пользовательское соглашение
                        </button>
                    </div>
                    <div className={s.blockEmpty}></div>

                    <div className={s.socialWrapper}>
                        <a href="#">
                            <Image src={instargam} className={s.socialIcon} alt="instargam icon" width={20}
                                   height={20}/>
                        </a>
                        <a href="#">
                            <Image src={telegram} className={s.socialIcon} alt="telegram icon" width={20}
                                   height={20}/>
                        </a>
                        <a href="#">
                            <Image src={whatsApp} className={s.socialIcon} alt="whatsApp icon" width={20}
                                   height={20}/>
                        </a>
                    </div>


                </div>

            </div>
        </div>
    )
}
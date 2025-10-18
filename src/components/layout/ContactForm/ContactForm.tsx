import * as React from 'react';
import s from './ContactForm.module.css'
import {CloseButton} from '@/components/ui/Button/CloseButton/CloseButton';
import telegram from '@/assets/images/icons/telegram.png';
import whatsApp from '@/assets/images/icons/whatsApp.png';
import Image from 'next/image';

type Props = {
    isOpen: boolean
    onClose: () => void
}

export const ContactForm = ({isOpen, onClose}: Props) => {
    return (
        <div className={`${s.contactForm} ${isOpen ? s.open : ''}`}>
            <CloseButton onClick={onClose}/>
            <div className={s.container}>
                <div className={s.block}>
                    <form>
                        <div className={s.formWrapper}>
                            <p className={s.title}>
                                Оставьте заявку для связи <br/> или пишите в удобный<br/> мессенджер
                            </p>
                            <p className={s.description}>Премиальный отдых в Дубай от $1000 с<br/> человека за день</p>
                            <input
                                className={s.input}
                                type="tel"
                                required={true}
                                placeholder="Введите ваш номер телефона ..."
                            />
                            <button
                                type="submit"
                                value="Позвоните мне"
                                className={s.submitButton}>Позвоните мне
                            </button>
                            <div className={s.socials}>
                                <a href="">
                                    <Image
                                        src={telegram}
                                        className={s.socialIcon}
                                        alt="telegram icon"
                                        width={50}
                                        height={50}
                                    />
                                </a>
                                <a href="">
                                    <Image
                                        src={whatsApp}
                                        className={s.socialIcon}
                                        alt="whatsApp icon"
                                        width={50}
                                        height={50}
                                    />
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

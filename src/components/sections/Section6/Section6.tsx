import * as React from 'react';
import s from '@/components/sections/Section6/Section6.module.css';
import Image from 'next/image';
import backImage06 from '../../../../public/images/backImage06.jpg';

type Props = {
    onOpenUserAgreement: () => void
}

export const Section6 = ({ onOpenUserAgreement }: Props) => {
    return (
        <div className={s.section}>
            <div className={s.container}>
                <div className={s.imageBlock}>
                    <span className={s.counter}>06</span>
                    <span className={s.imageWrapper}>
                        <Image src={backImage06} className={s.image} alt="" width={413} height={652}/>
                    </span>
                </div>
                <div className={s.formBlock}>
                    <form className={s.form}>
                        <p className={s.title}>Подберите мне<br/> программу</p>
                        <p className={s.description}>Оставьте заявку и мы свяжемся с Вами:</p>
                        <input
                            type="tel"
                            name="contact"
                            placeholder="Введите ваш номер телефона, WhatsApp или Telegram"
                            aria-label="Ваш номер телефона, WhatsApp или Telegram"
                            required
                            className={s.input}
                            size={40}
                        />
                        <p className={s.agreementText}>
                            Нажимая на кнопку, вы даете согласие на обработку своих персональных данных
                            и соглашаетесь с<br/><br/>
                            <button
                                type="button"
                                className={s.agreementLink}
                                onClick={onOpenUserAgreement}
                            >Пользовательским соглашением
                            </button>
                        </p>
                        <button
                            type="submit"
                            className={s.submitButton}
                        >
                            Отправить
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
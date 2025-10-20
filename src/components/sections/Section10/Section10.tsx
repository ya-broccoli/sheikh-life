import * as React from 'react';
import s from '@/components/sections/Section10/Section10.module.css';
import logo from '@/assets/images/svg/logo.svg';
import Image from 'next/image';
import image10 from '@/assets/images/content/image10.jpg'

type Props = {
    onOpenUserAgreement: () => void
}

export const Section10 = ({onOpenUserAgreement}: Props) => {

    return (
        <div className={s.section}>
            <div className={s.container}>
                <div className={s.imageWrapper}>
                    <Image src={image10} alt={''} width={418} height={276} className={s.imageBack}/>
                </div>
                <div className={s.wrapper}>
                    <div className={s.column1}>
                        <div className={s.addressWrapper}>
                            <p className={s.title}>Наш офис в Дубаи:</p>
                            <p className={s.address}>
                                Офис 801C, арка Ибн Баттута,
                                <br/>
                                Офисное здание, Гарден-Кросс-Роуд
                            </p>
                            <p className={s.map}>
                                <a
                                    href={'https://www.google.com/maps/place/Ibn+Battuta+Mall+-+Jabal+Ali+First+-+Dubai+-+%D0%9E%D0%B1%D1%8A%D0%B5%D0%B4%D0%B8%D0%BD%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5+%D0%90%D1%80%D0%B0%D0%B1%D1%81%D0%BA%D0%B8%D0%B5+%D0%AD%D0%BC%D0%B8%D1%80%D0%B0%D1%82%D1%8B/@25.0445128,55.1203624,19z/data=!4m6!3m5!1s0x3e5f133bd4859a1d:0x8a95e910536c108b!8m2!3d25.0447177!4d55.1205087!16s%2Fg%2F11bw3fmkqk?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={s.mapLink}
                                >
                                    Показать на карте
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className={s.column2}></div>
                    <div className={s.column3}>
                        <form
                            action="https://formspree.io/f/твой-код"
                            method="POST"
                            className={s.form}
                            noValidate
                        >
                            <p className={s.formTitle}>Хочу поехать!</p>

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
                                Нажимая на кнопку, вы даете согласие на обработку своих
                                персональных данных и соглашаетесь с
                                <br/>
                                <br/>
                                <button
                                    type="button"
                                    className={s.agreementLink}
                                    onClick={onOpenUserAgreement}
                                >
                                    Пользовательским соглашением
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
            <div className={s.footer}>
                <div className={s.footerWrapper}>
                    <div className={s.contacts}>
                        <div className={s.copywrite}>
                            <Image src={logo} alt="logo" width={50} height={40} className={s.image}/>
                            <p>
                                © 2020. Sheikh’s Life. Организация
                                <br/>
                                отдыха и мероприятий в ОАЭ
                            </p>
                        </div>
                        <button
                            type="button"
                            className={s.agreement}
                            onClick={onOpenUserAgreement}
                        >
                            Пользовательское соглашение
                        </button>
                    </div>
                    <div className={s.contacts}>
                        <p>
                            Поддержка в РФ 24/7
                            <br/>
                            <button
                                type="button"
                                className={s.callback}>
                                Перезвоните мне
                            </button>
                        </p>
                        <p>
                            <a href="tel:+7 (499) 286 80 02" className={s.phoneLink}>+7 (499) 286 80 02</a>
                        </p>
                    </div>
                    <div className={s.contacts}>
                        <p>
                            WhatsApp / <br/>
                            Telegram
                            <br/>
                        </p>
                        <p>
                            <a href="tel:+97 155 398 0707" className={s.phoneLink}>+97 155 398 0707</a>
                        </p>
                    </div>
                    <div className={s.contacts}>
                        <p>
                            Телефон головного
                            <br/>
                            офиса в Дубае
                            <br/>
                        </p>
                        <p>
                            <a href="tel:+97 14 240 8883" className={s.phoneLink}>+97 14 240 8883</a>
                        </p>
                    </div>
                    <div className={s.contacts}>
                        <p>
                            Остались вопросы?
                            <br/>
                            Напишите нам на e-mail
                        </p>
                        <p>
                            <a href="mailto:sheikhslife@gmail.com" className={s.mailLink}>sheikhslife@gmail.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

import * as React from 'react';
import s from './SocialButtons.module.css'
import {TelegramIcon} from '@/components/ui/icons/TelegramIcon/TelegramIcon';
import {WhatsAppIcon} from '@/components/ui/icons/WhatsAppIcon/WhatsAppIcon';

export const SocialButtons = () => {
    return (
        <div className={s.telegramButton}>
            <a href={''}>
                <TelegramIcon className={s.telegramIcon} width={20} height={20} />
            </a>
            <a href={''}>
                <WhatsAppIcon className={s.whatsAppIcon} width={20} height={20} />
            </a>
        </div>
    )
}

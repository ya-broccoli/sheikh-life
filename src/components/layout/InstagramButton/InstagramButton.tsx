import * as React from 'react';
import s from './InstagramButton.module.css'
import {InstagramIcon} from '@/components/ui/icons/Instagram/InstagramIcon';

export const InstagramButton = () => {
    return (
        <div className={s.instagramButton}>
            <a href={''}>
                <p>Instagram</p>
                <InstagramIcon className={s.instagramIcon} width={20} height={20} />
            </a>
        </div>
    )
}

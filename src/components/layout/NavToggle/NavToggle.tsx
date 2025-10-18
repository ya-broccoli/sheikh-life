import s from './NavToggle.module.css';
import * as React from 'react';
import {BurgerIcon} from '@/components/ui/icons/BurgerIcon/BurgerIcon';

type Props = {
    onClick: () => void
}

export const NavToggle = ({ onClick }: Props) => {
    return (
        <button className={s.navToggle} onClick={onClick}>
            <p>
                Навигация
            </p>
            <BurgerIcon className={s.buttonIcon} width={16} height={20} />
        </button>
    )
}

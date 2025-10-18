'use client'

import React, {useState} from 'react'
import {MainMenu} from '@/components/layout/MainMenu/MainMenu';
import {NavToggle} from '@/components/layout/NavToggle/NavToggle';
import {InstagramButton} from '@/components/layout/InstagramButton/InstagramButton';
import {SocialButtons} from '@/components/layout/SocialButtons/SocialButtons';

export const FloatingModals = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <>
            {/* Кнопки */}
            <NavToggle onClick={() => setIsMenuOpen(true)} />
            <InstagramButton />
            <SocialButtons />

            {/* Модалка */}
            <MainMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    )
}

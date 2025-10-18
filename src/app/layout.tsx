import {Prata} from 'next/font/google';
import './globals.css';
import {ReactNode} from 'react';
import {FloatingModals} from '@/components/layout/FloatingModals/FloatingModals';

const prata = Prata({
    subsets: ['latin'],
    weight: '400',
    display: 'swap',
});

export const metadata = {
    title: 'Sheikhs Life',
    description: 'The official website of Sheikh',
    charset: 'UTF-8',
}

export const viewport = {
    width: 'device-width',
    initialScale: 1,
}

export default function RootLayout({children}: {
    children: ReactNode;
}) {

    return (
        <html lang="ru">
            <body className={prata.className}>
                <FloatingModals/>
                {children}
            </body>
        </html>
    );
}

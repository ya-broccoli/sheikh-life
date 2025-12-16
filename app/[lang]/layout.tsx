// import {Prata} from 'next/font/google';
// import type { Metadata } from 'next';
// import './globals.css';
// import {CSSProperties, ReactNode} from 'react';
// import {FloatingModals} from '@/components/layout/FloatingModals/FloatingModals';
// import backImage from '@/assets/images/backgrounds/backImage10.jpg';
// import patternImage from '@/assets/images/backgrounds/pattern.jpg';
//
// const prata = Prata({
//     subsets: ['latin'],
//     weight: '400',
//     display: 'swap',
// });
//
// export const metadata: Metadata = {
//     title: 'Sheikhs Life',
//     description: 'The official website of Sheikh',
// }
//
// export const viewport = {
//     width: 'device-width',
//     initialScale: 1,
// }
//
// export default function RootLayout({children}: {
//     children: ReactNode;
// }) {
//
//     return (
//         <html lang="ru">
//             <body
//                 className={prata.className}
//                 style={{
//                     '--back-image': `url(${backImage})`,
//                     '--pattern-image': `url(${patternImage})`,
//                 } as CSSProperties}
//             >
//                 <FloatingModals/>
//                 {children}
//             </body>
//         </html>
//     );
// }


import {Prata} from 'next/font/google';
import type {Metadata} from 'next';
import './globals.css';
import {CSSProperties, ReactNode} from 'react';
import {FloatingModals} from '@/components/layout/FloatingModals/FloatingModals';
import backImage from '@/assets/images/backgrounds/backImage10.jpg';
import patternImage from '@/assets/images/backgrounds/pattern.jpg';

const prata = Prata({
    subsets: ['latin'],
    weight: '400',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Sheikhs Life',
    description: 'The official website of Sheikh',
}

export const viewport = {
    width: 'device-width',
    initialScale: 1,
}

export async function generateStaticParams() {
    return [{lang: 'ru'}, {lang: 'en'}]
}

interface LayoutProps {
    children: ReactNode;
    params: Promise<{ lang: string }>;
}

export default async function RootLayout({children, params}: LayoutProps) {
    const {lang} = await params;

    return (
        <html lang={lang}>
        <body
            className={prata.className}
            style={{
                '--back-image': `url(${backImage})`,
                '--pattern-image': `url(${patternImage})`,
            } as CSSProperties}
        >
        <FloatingModals/>
        {children}
        </body>
        </html>
    );
}

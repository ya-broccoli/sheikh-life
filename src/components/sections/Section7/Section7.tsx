'use client'

import * as React from 'react';
import s from '@/components/sections/Section7/Section7.module.css';
import Image from 'next/image';
import buttonIcon from '@/assets/images/svg/buttonIcon.svg';
import {AkhrorContent} from '@/components/sections/Section7/Founder1/Founder1Tab';
import {ViktoriaContent} from '@/components/sections/Section7/Founder2/Founder2Tab';
import {useState} from 'react';

type Props = {
    onOpenAbout: () => void
}

export const Section7 = ({ onOpenAbout }: Props) => {
    const [activeTab, setActiveTab] = useState('akhror');

    const tabs = [
        {
            value: 'akhror',
            label: (
                <>
                    <span>Axpop</span><br/>
                    <span>Рахимбаев</span>
                </>
            ),
            content: <AkhrorContent/>
        },
        {
            value: 'viktoria',
            label: (
                <>
                    <span>Закелова Валерия</span><br/>
                    <span>и Закелова Виктория</span>
                </>
            ),
            content: <ViktoriaContent/>
        },
    ];

    const activeContent = tabs.find(tab => tab.value === activeTab)?.content;

    return (
        <div className={s.section} id="who">
            <div className={s.container}>
                <span className={s.counter}>07</span>
                <div className={s.columns}>
                    <div className={s.leftColumn}>
                        <p className={s.title}>Основатели<br/>проекта:</p>

                        {/* табы */}
                        <div className={s.tabsList}>
                            {tabs.map(tab => (
                                <button
                                    key={tab.value}
                                    className={`${s.tab} ${activeTab === tab.value ? s.active : ''}`}
                                    onClick={() => setActiveTab(tab.value)}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className={s.rightColumn}>
                        {activeContent}
                    </div>
                </div>
            </div>
            <div className={s.container}>
                <button className={s.applicationButton} onClick={onOpenAbout}>
                    <Image src={buttonIcon} className={s.buttonIcon} alt="button icon" width={16} height={16}/>
                    Подробнее о нас
                </button>
            </div>
        </div>
    )
}
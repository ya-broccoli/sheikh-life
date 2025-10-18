'use client'

import * as React from 'react';
import s from './Section2.module.css'
import Image from 'next/image'
import {casesData} from '@/data/casesData'

type Props = {
    onOpenCase: (initialSlide: number) => void
}

export const Section2 = ({ onOpenCase }: Props) => {
    // Находим индекс карточки в массиве при клике
    const handleOpenCase = (caseId: number) => {
        const initialSlide = casesData.findIndex(caseItem => caseItem.id === caseId)
        onOpenCase(initialSlide)
    }

    return (
        <div className={s.section} id="cases">
            <div>
                <h2 className={s.title}>Кейсы</h2>
                <span className={s.counter}>02</span>
                <ul className={s.worksList}>
                    {casesData.map((caseItem) => (
                        <li key={caseItem.id} className={s.worksItem}>
                            <Image src={caseItem.image} alt={caseItem.title} fill className={s.image}/>
                            <h3 className={s.workTitle}>{caseItem.title}</h3>
                            <div className={s.workItemInner}>
                                <p className={s.workItemDescription}>Индивидуальная программа</p>
                                <button
                                    className={s.workItemBtn}
                                    onClick={() => handleOpenCase(caseItem.id)}
                                >
                                    Узнать больше
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

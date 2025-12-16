'use client'

import s from './page.module.css'
import {useState} from 'react';
import {Section1} from '@/components/sections/Section1/Section1';
import {Section2} from '@/components/sections/Section2/Section2';
import {Section3} from '@/components/sections/Section3/Section3';
import {Section4} from '@/components/sections/Section4/Section4';
import {Section5} from '@/components/sections/Section5/Section5';
import {Section6} from '@/components/sections/Section6/Section6';
import {Section7} from '@/components/sections/Section7/Section7';
import {Section8} from '@/components/sections/Section8/Section8';
import {Section9} from '@/components/sections/Section9/Section9';
import {Section10} from '@/components/sections/Section10/Section10';
import {ContactForm} from '@/components/layout/ContactForm/ContactForm';
import {InfoModal} from '@/components/layout/InfoModal/InfoModal';
import {servicesData} from '@/data/servicesData';
import {casesData} from '@/data/casesData';
import {About} from '@/components/layout/About/About';
import {UserAgreement} from '@/components/layout/UserAgreement/UserAgreement';
import {useParams} from 'next/navigation';

export default function Page() {

    const params = useParams()
    const lang = params.lang as string

    const [isFormOpen, setIsFormOpen] = useState(false)
    const [isAboutOpen, setAboutOpen] = useState(false)
    const [isUserAgreementOpen, setUserAgreementOpen] = useState(false)
    const [activeModal, setActiveModal] = useState<{
        type: 'service' | 'case'
        initialSlide: number
    } | null>(null)

    const modalSlides = activeModal?.type === 'case'
        ? casesData.map(caseItem => ({
            id: caseItem.id,
            content: caseItem.content
        }))
        : servicesData.map(service => ({
            id: service.id,
            content: service.content
        }))

    // Функция для нахождения индекса услуги по ID
    const findServiceIndex = (serviceId: number) => {
        return servicesData.findIndex(service => service.id === serviceId);
    }

    return (
        <div className={s.page}>
            <main className={s.main}>
                <Section1 onOpenForm={() => setIsFormOpen(true)} lang={lang} />
                <Section2 onOpenCase={(initialSlide) => setActiveModal({ type: 'case', initialSlide })} />
                <Section3 onOpenService={(serviceId) => setActiveModal({ type: 'service', initialSlide: findServiceIndex(serviceId) })} />
                <Section4 onOpenForm={() => setIsFormOpen(true)} />
                <Section5 onOpenForm={() => setIsFormOpen(true)} />
                <Section6 onOpenUserAgreement={() => setUserAgreementOpen(true)} />
                <Section7 onOpenAbout={() => setAboutOpen(true)} />
                <Section8 />
                <Section9 />
                <Section10 onOpenUserAgreement={() => setUserAgreementOpen(true)} />
            </main>

            <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
            <About isOpen={isAboutOpen} onClose={() => setAboutOpen(false)} />
            <UserAgreement isOpen={isUserAgreementOpen} onClose={() => setUserAgreementOpen(false)} />

            <InfoModal
                key={activeModal?.initialSlide}
                isOpen={activeModal !== null}
                onClose={() => setActiveModal(null)}
                slides={modalSlides}
                initialSlide={activeModal?.initialSlide || 0}
                onOpenForm={() => setIsFormOpen(true)}
            />
        </div>
    )
}

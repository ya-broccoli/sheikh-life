import * as React from 'react';
import s from '@/components/sections/Section8/Section8.module.css';
import {RadixTabs} from '@/components/ui/Tabs/Tabs';
import {ReviewsTab} from '@/components/sections/Section8/ReviewsTab/ReviewsTab';
import {ThanksTab} from '@/components/sections/Section8/ThanksTab/ThanksTab';

export const Section8 = () => {

    const tabs = [
        {value: 'reviews', label: 'Отзывы', content: <ReviewsTab />},
        {value: 'thanks', label: 'Благодарности', content: <ThanksTab />},
    ];

    return (
        <div className={s.section} id="reviews">
            <div className={s.container}>
                <p className={s.counter}>08</p>
                <RadixTabs tabs={tabs} defaultValue="reviews"/>
            </div>
        </div>
    );
};

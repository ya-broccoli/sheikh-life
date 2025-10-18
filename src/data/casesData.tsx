import item1 from '@/assets/images/content/cases/backgrounds/item1.jpg'
import item2 from '@/assets/images/content/cases/content/item2.jpg'
import item3 from '@/assets/images/content/cases/backgrounds/item3.jpg'
import item4 from '@/assets/images/content/cases/backgrounds/item4.jpg'
import item5 from '@/assets/images/content/cases/backgrounds/item5.jpg'
import item6 from '@/assets/images/content/cases/backgrounds/item6.jpg'
import {Case1} from '@/components/sections/Section2/cases/Case1/Case1';
import {Case2} from '@/components/sections/Section2/cases/Case2/Case2';
import {Case3} from '@/components/sections/Section2/cases/Case3/Case3';
import {Case4} from '@/components/sections/Section2/cases/Case4/Case4';
import {Case5} from '@/components/sections/Section2/cases/Case5/Case5';
import {Case6} from '@/components/sections/Section2/cases/Case6/Case6';

export const casesData = [
    {
        id: 201,
        title: '1 день из жизни шейха',
        image: item1,
        content: <Case1/>
    },
    {
        id: 202,
        title: 'Выходные шейха',
        image: item2,
        content: <Case2/>
    },
    {
        id: 203,
        title: 'Съезд шейхов из 7 эмиратов',
        image: item3,
        content: <Case3/>
    },
    {
        id: 204,
        title: 'Организация крупных мероприятий',
        image: item4,
        content: <Case4/>
    },
    {
        id: 205,
        title: 'Предложение руки и сердца',
        image: item5,
        content: <Case5/>
    },
    {
        id: 206,
        title: 'Организация дня рождения',
        image: item6,
        content: <Case6/>
    }
]

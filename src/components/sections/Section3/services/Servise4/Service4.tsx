import * as React from 'react';
import s from '../Services.module.css';
import Image from 'next/image';
import yacht70ft from '@/assets/images/content/yacht/yacht70ft.png';
import yacht159ft from '@/assets/images/content/yacht/yacht159ft.png';
import yacht124ft from '@/assets/images/content/yacht/yacht124ft.png';
import taTii from '@/assets/images/content/yacht/taTii.png';
import alShmookh from '@/assets/images/content/yacht/alShmookh.png';
import elitVip from '@/assets/images/content/yacht/elitVip.png';

type Props = {
    onOpenForm?: () => void
}

export const Service4 = ({onOpenForm}: Props) => {
    return (
        <div className={s.container}>
            <div className={s.blockEmpty}></div>
            <div className={s.block}>
                <p className={s.title}>
                    Аренда яхты
                </p>
                <ul className={s.list}>
                    <li className={s.item}>
                        <Image src={yacht70ft} alt="" width={370} height={246} className={s.image}/>
                        <p>70ft Yacht</p>
                    </li>
                    <li className={s.item}>
                        <Image src={yacht159ft} alt="" width={370} height={246} className={s.image}/>
                        <p>150ft Yacht</p>
                    </li>
                    <li className={s.item}>
                        <Image src={yacht159ft} alt="" width={370} height={246} className={s.image}/>
                        <p>164ft Yacht</p>
                    </li>
                    <li className={s.item}>
                        <Image src={yacht159ft} alt="" width={370} height={246} className={s.image}/>
                        <p>90ft Yacht</p>
                    </li>
                    <li className={s.item}>
                        <Image src={yacht124ft} alt="" width={370} height={246} className={s.image}/>
                        <p>124ft Yacht</p>
                    </li>
                    <li className={s.item}>
                        <Image src={yacht124ft} alt="" width={370} height={246} className={s.image}/>
                        <p>Ocean Emerald Yacht</p>
                    </li>
                    <li className={s.item}>
                        <Image src={taTii} alt="" width={370} height={246} className={s.image}/>
                        <p>taTii II Yacht</p>
                    </li>
                    <li className={s.item}>
                        <Image src={alShmookh} alt="" width={370} height={246} className={s.image}/>
                        <p>Al Shmookh</p>
                    </li>
                    <li className={s.item}>
                        <Image src={elitVip} alt="" width={370} height={246} className={s.image}/>
                        <p>Elite VIP</p>
                    </li>
                </ul>
                <button className={s.formButton} onClick={onOpenForm}>Хотите также?</button>
            </div>
        </div>
    );
};


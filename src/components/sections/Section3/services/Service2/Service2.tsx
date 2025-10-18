import * as React from 'react';
import s from '../Services.module.css';
import Image from 'next/image';
import driver from '@/assets/images/content/personalDriver/driver.png';
import landCruiser from '@/assets/images/content/personalDriver/landCruiser.png';
import patrol from '@/assets/images/content/personalDriver/patrol.png';
import bmw7 from '@/assets/images/content/personalDriver/bmw7.png';
import mercedesS from '@/assets/images/content/personalDriver/mercedesS.png';
import viano from '@/assets/images/content/personalDriver/viano.png';
import sprinter from '@/assets/images/content/personalDriver/sprinter.png';
import phantom from '@/assets/images/content/personalDriver/phantom.png';
import cullinan from '@/assets/images/content/personalDriver/cullinan.png';
import escalade from '@/assets/images/content/personalDriver/escalade.png';
import rangeRover from '@/assets/images/content/personalDriver/rangeRover.png';

type Props = {
    onOpenForm?: () => void
}

export const Service2 = ({onOpenForm}: Props) => {
    return (
        <div className={s.container}>
            <div className={s.blockEmpty}></div>
            <div className={s.block}>
                <p className={s.title}>
                    Личный водитель
                </p>
                <ul className={s.list}>
                    <li className={s.item}>
                        <Image src={driver} alt="" width={370} height={246} className={s.image}/>
                    </li>
                    <li className={s.item}>
                        <Image src={landCruiser} alt="" width={370} height={246} className={s.image}/>
                        <p>Land Cruiser</p>
                    </li>
                    <li className={s.item}>
                        <Image src={patrol} alt="" width={370} height={274} className={s.image}/>
                        <p>Nissan Patrol</p>
                    </li>
                    <li className={s.item}>
                        <Image src={bmw7} alt="" width={370} height={246} className={s.image}/>
                        <p>BMW 7</p>
                    </li>
                    <li className={s.item}>
                        <Image src={mercedesS} alt="" width={370} height={246} className={s.image}/>
                        <p>Mercedes S Class</p>
                    </li>
                    <li className={s.item}>
                        <Image src={viano} alt="" width={370} height={246} className={s.image}/>
                        <p>Mercedes Viano</p>
                    </li>
                    <li className={s.item}>
                        <Image src={sprinter} alt="" width={370} height={246} className={s.image}/>
                        <p>Mercedes Sprinter</p>
                    </li>
                    <li className={s.item}>
                        <Image src={phantom} alt="" width={370} height={246} className={s.image}/>
                        <p>Rolls Royce Phantom</p>
                    </li>
                    <li className={s.item}>
                        <Image src={cullinan} alt="" width={370} height={246} className={s.image}/>
                        <p>Rolls Royce Cullinan</p>
                    </li>
                    <li className={s.item}>
                        <Image src={escalade} alt="" width={370} height={246} className={s.image}/>
                        <p>Cadillac 2021 Escalade</p>
                    </li>
                    <li className={s.item}>
                        <Image src={rangeRover} alt="" width={370} height={246} className={s.image}/>
                        <p>Range Rover</p>
                    </li>
                </ul>
                <button className={s.formButton} onClick={onOpenForm}>Хотите также?</button>
            </div>
        </div>
    );
};


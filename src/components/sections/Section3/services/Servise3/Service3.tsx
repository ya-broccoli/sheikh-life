import * as React from 'react';
import s from '../Services.module.css';
import Image from 'next/image';
import huracanEVO from '@/assets/images/content/supercar/huracanEVO.png';
import urus from '@/assets/images/content/supercar/urus.png';
import ferrariF8 from '@/assets/images/content/supercar/ferrariF8.png';
import aventadorS from '@/assets/images/content/supercar/aventadorS.png';
import ferrariRoma from '@/assets/images/content/supercar/ferrariRoma.png';
import ferrariGTB from '@/assets/images/content/supercar/ferrariGTB.png';
import ghost from '@/assets/images/content/supercar/ghost.png';
import cullinan from '@/assets/images/content/personalDriver/cullinan.png';
import dawn from '@/assets/images/content/supercar/dawn.png';
import wraith from '@/assets/images/content/supercar/wraith.png';
import continentalGT from '@/assets/images/content/supercar/continentalGT.png';
import continental from '@/assets/images/content/supercar/continental.png';
import mercedesBenzG500 from '@/assets/images/content/supercar/mercedesBenzG500.png';
import bentaygaW12 from '@/assets/images/content/supercar/bentaygaW12.png';
import mercedesS500 from '@/assets/images/content/supercar/mercedesS500.png';
import macan from '@/assets/images/content/supercar/macan.png';
import astonMartin from '@/assets/images/content/supercar/astonMartin.png';
import audiRSQ3 from '@/assets/images/content/supercar/audiRSQ3.png';
import ghibli from '@/assets/images/content/supercar/ghibli.png';
import mcLaurenGT from '@/assets/images/content/supercar/mcLaurenGT.png';

type Props = {
    onOpenForm?: () => void
}

export const Service3 = ({onOpenForm}: Props) => {
    return (
        <div className={s.container}>
            <div className={s.blockEmpty}></div>
            <div className={s.block}>
                <p className={s.title}>
                    Аренда суперкара
                </p>
                <ul className={s.list}>
                    <li className={s.item}>
                        <Image src={huracanEVO} alt="" width={370} height={246} className={s.image}/>
                        <p>Lamborghini Huracan EVO</p>
                    </li>
                    <li className={s.item}>
                        <Image src={urus} alt="" width={370} height={246} className={s.image}/>
                        <p>Lamborghini URUS</p>
                    </li>
                    <li className={s.item}>
                        <Image src={ferrariF8} alt="" width={370} height={274} className={s.image}/>
                        <p>Ferrari F8</p>
                    </li>
                    <li className={s.item}>
                        <Image src={aventadorS} alt="" width={370} height={246} className={s.image}/>
                        <p>Lamborghini Aventador S</p>
                    </li>
                    <li className={s.item}>
                        <Image src={ferrariRoma} alt="" width={370} height={246} className={s.image}/>
                        <p>Ferrari Roma</p>
                    </li>
                    <li className={s.item}>
                        <Image src={ferrariRoma} alt="" width={370} height={246} className={s.image}/>
                        <p>Ferrari 488 Spider</p>
                    </li>
                    <li className={s.item}>
                        <Image src={ferrariGTB} alt="" width={370} height={246} className={s.image}/>
                        <p>Ferrari 488 GTB</p>
                    </li>
                    <li className={s.item}>
                        <Image src={ghost} alt="" width={370} height={246} className={s.image}/>
                        <p>Rolls Royce Ghost</p>
                    </li>
                    <li className={s.item}>
                        <Image src={cullinan} alt="" width={370} height={246} className={s.image}/>
                        <p>Rolls Royce Cullinan</p>
                    </li>
                    <li className={s.item}>
                        <Image src={dawn} alt="" width={370} height={246} className={s.image}/>
                        <p>Rolls Royce Dawn</p>
                    </li>
                    <li className={s.item}>
                        <Image src={wraith} alt="" width={370} height={246} className={s.image}/>
                        <p>Rolls Royce Wraith</p>
                    </li>
                    <li className={s.item}>
                        <Image src={continentalGT} alt="" width={370} height={246} className={s.image}/>
                        <p>Bentley Continental GT</p>
                    </li>
                    <li className={s.item}>
                        <Image src={continental} alt="" width={370} height={246} className={s.image}/>
                        <p>Bentley Continental</p>
                    </li>
                    <li className={s.item}>
                        <Image src={mercedesBenzG500} alt="" width={370} height={246} className={s.image}/>
                        <p>Mercedes Benz G500</p>
                    </li>
                    <li className={s.item}>
                        <Image src={mercedesBenzG500} alt="" width={370} height={246} className={s.image}/>
                        <p>Mercedes G Class G63</p>
                    </li>
                    <li className={s.item}>
                        <Image src={bentaygaW12} alt="" width={370} height={246} className={s.image}/>
                        <p>Bentley Bentayga W12</p>
                    </li>
                    <li className={s.item}>
                        <Image src={mercedesBenzG500} alt="" width={370} height={246} className={s.image}/>
                        <p>Mercedes AMG GT 63</p>
                    </li>
                    <li className={s.item}>
                        <Image src={mercedesS500} alt="" width={370} height={246} className={s.image}/>
                        <p>Mercedes S500</p>
                    </li>
                    <li className={s.item}>
                        <Image src={mercedesS500} alt="" width={370} height={246} className={s.image}/>
                        <p>Audi R8</p>
                    </li>
                    <li className={s.item}>
                        <Image src={macan} alt="" width={370} height={246} className={s.image}/>
                        <p>Porsche Macan</p>
                    </li>
                    <li className={s.item}>
                        <Image src={astonMartin} alt="" width={370} height={246} className={s.image}/>
                        <p>Aston Martin</p>
                    </li>
                    <li className={s.item}>
                        <Image src={audiRSQ3} alt="" width={370} height={246} className={s.image}/>
                        <p>Audi RS Q3</p>
                    </li>
                    <li className={s.item}>
                        <Image src={ghibli} alt="" width={370} height={246} className={s.image}/>
                        <p>Maserati Ghibli</p>
                    </li>
                    <li className={s.item}>
                        <Image src={mcLaurenGT} alt="" width={370} height={246} className={s.image}/>
                        <p>McLauren GT Tricolor</p>
                    </li>
                </ul>
                <button className={s.formButton} onClick={onOpenForm}>Хотите также?</button>
            </div>
        </div>
    );
};


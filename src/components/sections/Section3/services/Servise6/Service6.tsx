import * as React from 'react';
import s from '../Services.module.css';
import Image from 'next/image';
import nusrEt from '@/assets/images/content/restraunts/nusrEt.png';
import nusrEt2 from '@/assets/images/content/restraunts/nusrEt2.png';
import opa from '@/assets/images/content/restraunts/opa.png';
import opa2 from '@/assets/images/content/restraunts/opa2.png';
import laPititMaison from '@/assets/images/content/restraunts/laPititMaison.png';
import laPititMaison2 from '@/assets/images/content/restraunts/laPititMaison2.png';
import Chiprianni from '@/assets/images/content/restraunts/Chiprianni.png';
import nammos from '@/assets/images/content/restraunts/nammos.png';
import zuma from '@/assets/images/content/restraunts/zuma.png';
import zuma2 from '@/assets/images/content/restraunts/zuma2.png';
import nobu from '@/assets/images/content/restraunts/nobu.png';
import nobu2 from '@/assets/images/content/restraunts/nobu2.png';
import hakkasan from '@/assets/images/content/restraunts/hakkasan.png';
import hakkasan2 from '@/assets/images/content/restraunts/hakkasan2.png';
import burak from '@/assets/images/content/restraunts/burak.png';
import burak2 from '@/assets/images/content/restraunts/burak2.png';
import gaia from '@/assets/images/content/restraunts/gaia.png';
import ilBorro from '@/assets/images/content/restraunts/ilBorro.png';
import ilBorro2 from '@/assets/images/content/restraunts/ilBorro2.png';
import shanghaiMe from '@/assets/images/content/restraunts/shanghaiMe.png';
import shanghaiMe2 from '@/assets/images/content/restraunts/shanghaiMe2.png';
import maidenShanghai from '@/assets/images/content/restraunts/maidenShanghai.png';
import maidenShanghai2 from '@/assets/images/content/restraunts/maidenShanghai2.png';
import coya from '@/assets/images/content/restraunts/coya.png';
import coya2 from '@/assets/images/content/restraunts/coya2.png';
import kayto from '@/assets/images/content/restraunts/kayto.png';
import rockfish from '@/assets/images/content/restraunts/rockfish.png';
import rockfish2 from '@/assets/images/content/restraunts/rockfish2.png';

type Props = {
    onOpenForm?: () => void
}

export const Service6 = ({onOpenForm}: Props) => {
    return (
        <div className={s.container}>
            <div className={s.blockEmpty}></div>
            <div className={s.block}>
                <p className={s.title}>
                    Любимые рестараны Шейха
                </p>
                <ul className={s.list}>
                    <li className={s.item}>
                        <Image src={nusrEt} alt="" width={370} height={246} className={s.image}/>
                        <p className={s.description}>NusrEt</p>
                    </li>
                    <li className={s.item}>
                        <Image src={nusrEt2} alt="" width={370} height={246} className={s.image}/>
                    </li>
                    <li className={s.item}>
                        <Image src={opa} alt="" width={370} height={246} className={s.image}/>
                        <p className={s.description}>Opa</p>
                    </li>
                    <li className={s.item}>
                        <Image src={opa2} alt="" width={370} height={246} className={s.image}/>
                    </li>
                    <li className={s.item}>
                        <Image src={laPititMaison} alt="" width={370} height={246} className={s.image}/>
                        <p className={s.description}>La Pitit Maison</p>
                    </li>
                    <li className={s.item}>
                        <Image src={laPititMaison2} alt="" width={370} height={246} className={s.image}/>
                    </li>
                    <li className={s.item}>
                        <Image src={Chiprianni} alt="" width={370} height={246} className={s.image}/>
                        <p className={s.description}>Chiprianni</p>
                    </li>
                    <li className={s.item}>
                        <Image src={Chiprianni} alt="" width={370} height={246} className={s.image}/>
                    </li>
                    <li className={s.item}>
                        <Image src={nammos} alt="" width={370} height={246} className={s.image}/>
                        <p className={s.description}>Nammos</p>
                    </li>
                    <li className={s.item}>
                        <Image src={nammos} alt="" width={370} height={246} className={s.image}/>
                    </li>
                    <li className={s.item}>
                        <Image src={zuma} alt="" width={370} height={246} className={s.image}/>
                        <p className={s.description}>Zuma</p>
                    </li>
                    <li className={s.item}>
                        <Image src={zuma2} alt="" width={370} height={246} className={s.image}/>
                    </li>
                    <li className={s.item}>
                        <Image src={nobu} alt="" width={370} height={246} className={s.image}/>
                        <p className={s.description}>Nobu</p>
                    </li>
                    <li className={s.item}>
                        <Image src={nobu2} alt="" width={370} height={246} className={s.image}/>
                    </li>
                    <li className={s.item}>
                        <Image src={hakkasan} alt="" width={370} height={246} className={s.image}/>
                        <p className={s.description}>Hakkasan</p>
                    </li>
                    <li className={s.item}>
                        <Image src={hakkasan2} alt="" width={370} height={246} className={s.image}/>
                    </li>
                    <li className={s.item}>
                        <Image src={burak} alt="" width={370} height={246} className={s.image}/>
                        <p className={s.description}>Burak</p>
                    </li>
                    <li className={s.item}>
                        <Image src={burak2} alt="" width={370} height={246} className={s.image}/>
                    </li>
                    <li className={s.item}>
                        <Image src={gaia} alt="" width={370} height={246} className={s.image}/>
                        <p className={s.description}>Gaia</p>
                    </li>
                    <li className={s.item}>
                        <Image src={gaia} alt="" width={370} height={246} className={s.image}/>
                    </li>
                    <li className={s.item}>
                        <Image src={ilBorro} alt="" width={370} height={246} className={s.image}/>
                        <p className={s.description}>Il Borro</p>
                    </li>
                    <li className={s.item}>
                        <Image src={ilBorro2} alt="" width={370} height={246} className={s.image}/>
                    </li>
                    <li className={s.item}>
                        <Image src={shanghaiMe} alt="" width={370} height={246} className={s.image}/>
                        <p className={s.description}>Shanghai Me</p>
                    </li>
                    <li className={s.item}>
                        <Image src={shanghaiMe2} alt="" width={370} height={246} className={s.image}/>
                    </li>
                    <li className={s.item}>
                        <Image src={maidenShanghai} alt="" width={370} height={246} className={s.image}/>
                        <p className={s.description}>Maiden Shanghai</p>
                    </li>
                    <li className={s.item}>
                        <Image src={maidenShanghai2} alt="" width={370} height={246} className={s.image}/>
                    </li>
                    <li className={s.item}>
                        <Image src={coya} alt="" width={370} height={246} className={s.image}/>
                        <p className={s.description}>Coya</p>
                    </li>
                    <li className={s.item}>
                        <Image src={coya2} alt="" width={370} height={246} className={s.image}/>
                    </li>
                    <li className={s.item}>
                        <Image src={kayto} alt="" width={370} height={246} className={s.image}/>
                        <p className={s.description}>Kayto</p>
                    </li>
                    <li className={s.item}>
                        <Image src={kayto} alt="" width={370} height={246} className={s.image}/>
                    </li>
                    <li className={s.item}>
                        <Image src={rockfish} alt="" width={370} height={246} className={s.image}/>
                        <p className={s.description}>Kayto</p>
                    </li>
                    <li className={s.item}>
                        <Image src={rockfish2} alt="" width={370} height={246} className={s.image}/>
                    </li>
                </ul>
                <button className={s.formButton} onClick={onOpenForm}>Хотите также?</button>
            </div>
        </div>
    );
};


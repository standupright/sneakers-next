import { Container } from '@mui/material'
import React, { ReactNode, useMemo, useState } from 'react'
import Image from 'next/image'
import styles from '../../styles/Main.module.scss';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export const Main: React.FC = () => {

    return (
        <div>
            <Container maxWidth="lg">
                <ul className={styles.list}>
                    {Array(6).fill('').map((el, index) => (
                        <li key={index} className={styles.item}>
                            <div className={styles.image}>
                                <Image
                                    src={'http://clipart-library.com/img/1743159.png'}
                                    alt="Photo of the sneaker"
                                    width={400}
                                    height={300}
                                />
                            </div>
                            <h3 className={styles.price}>I-5923 RUNNER PRIDE</h3>
                            <p className={styles.price}>£99.95</p>
                        </li>
                    ))}
                </ul>
            </Container>
            <div className={styles.about}>
                <Container maxWidth="lg">
                    <h2 className={styles.title}>
                        Team
                    </h2>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <div className={styles.photo}>
                                <Image
                                    src={'https://stepn.com/img/team/jerry.png'}
                                    alt="Photo of the sneaker"
                                    width={520}
                                    height={674}
                                />
                            </div>
                            <h3 className={styles.profile}>Jerry Huang</h3>
                            <p className={styles.price}>Co-founder</p>
                        </li>

                        <li className={styles.item}>
                            <div className={styles.photo}>
                                <Image
                                    src={'https://stepn.com/img/team/yawn.png'}
                                    alt="Photo of the sneaker"
                                    width={520}
                                    height={674}
                                />
                            </div>
                            <h3 className={styles.profile}>Yawn Rong</h3>
                            <p className={styles.price}>Tech Lead</p>
                        </li>

                        <li className={styles.item}>
                            <div className={styles.photo}>
                                <Image
                                    src={'https://stepn.com/img/team/Ryan.png'}
                                    alt="Photo of the sneaker"
                                    width={520}
                                    height={674}
                                />
                            </div>
                            <h3 className={styles.profile}>Ryan Turner</h3>
                            <p className={styles.price}>Lead Designer</p>
                        </li>
                    </ul>
                </Container>
            </div>

            <div className={styles.form}>
                <Container maxWidth="lg">
                    <h2 className={styles.title}>Contact us</h2>
                    <div className={styles.phone}>
                        <LocalPhoneIcon />
                        <span>+7 (800) 555 35-55</span>
                    </div>
                </Container>
            </div>
        </div>
    )
}

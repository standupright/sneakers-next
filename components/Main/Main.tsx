import { Container } from '@mui/material'
import React, { ReactNode, useMemo, useState } from 'react'
import Image from 'next/image'
import styles from '../../styles/Main.module.scss';

export const Main: React.FC = () => {

    return (
        <div>
            <Container maxWidth="lg">
                <ul className={styles.list}>
                    {Array(12).fill('').map((el, index) => (
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
        </div>
    )
}

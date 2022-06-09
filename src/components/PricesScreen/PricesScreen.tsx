import { Container } from '@mui/material';
import Link from 'next/link';
import React, { useCallback } from 'react'
import { Price } from '../../types/prices'

import styles from './PricesScreen.module.scss';

interface PricesScreenProps {
    prices: Price[];
}

export const PricesScreen: React.FC<PricesScreenProps> = ({ prices }) => {
    console.log(prices)

    const getPrice = useCallback((price: number): string => {
        return `${price * 10} $`;
    }, []);

    return (
        <div className={styles.wrapper}>
            <Container maxWidth="lg">
                <div className={styles.table}>
                    <div className={styles.tableHeader}>
                        <span className={styles.left}>
                            Название модели
                        </span>
                        <span className={styles.right}>
                            Цена
                        </span>
                    </div>
                    {prices?.map((el) => (
                        <Link key={el.id} href={`prices/${el.id}`}>
                            <a>
                                <div className={styles.element} >
                                    <span className={styles.left}>
                                        {el.title}
                                    </span>
                                    <span className={styles.right}>
                                        {getPrice(el.id)}
                                    </span>
                                </div>
                            </a>
                        </Link>

                    ))}
                </div>

            </Container >
        </div >

    )
}

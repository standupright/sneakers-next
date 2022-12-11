import { Container } from '@mui/material';
import React, { useCallback } from 'react';
import { Price as PriceType } from '../../types/prices';
import Image from 'next/image';
import styles from './PriceItem.module.scss';
import { getPrice } from '../../utils';

interface PriceProps {
    price: PriceType;
}

export const PriceItem: React.FC<PriceProps> = ({ price }) => {
    const handleClick = useCallback(() => {
        alert('alert')
    }, []);
    return (
        <div className={styles.wrapper}>
            <Container maxWidth="lg">
                <div className={styles.itemInner}>
                    <div className={styles.image}>
                        <Image src={'/sneaker.png'} alt="Photo of the sneaker" width={400} height={300} />
                    </div>

                    <div className={styles.item}>
                        <span className={styles.name}>Название:</span>
                        <span className={styles.name}>{price.title}</span>
                    </div>

                    <div className={styles.item}>
                        <span className={styles.name}>Цена:</span>
                        <span className={styles.name}>{getPrice(price.id)}</span>
                    </div>

                    <div className={styles.item}>
                        <button data-testid="btn" onClick={handleClick}>
                            Click
                        </button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

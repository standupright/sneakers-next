import { Container } from '@mui/material';
import React from 'react'
import { Price } from '../../types/prices'

import styles from './PricesScreen.module.scss';

interface PricesScreenProps {
    prices: Price[];
}

export const PricesScreen: React.FC<PricesScreenProps> = ({prices}) => {
    return (
        <div className={styles.wrapper}>
            <Container maxWidth="lg">
asdsd
            </Container>
        </div>

    )
}

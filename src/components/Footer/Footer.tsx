import { Container } from '@mui/material';
import React from 'react'

import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <Container maxWidth="lg">
                <div className={styles.copyright}>
                    Copyright &copy; standupright 2022
                </div>
            </Container>
        </div>
    )
}

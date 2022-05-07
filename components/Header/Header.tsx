
import React, { useState } from 'react'
import styles from '../../styles/Header.module.scss';
import HomeIcon from '@mui/icons-material/Home';
import { Container } from '@mui/material';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BubbleChartIcon from '@mui/icons-material/BubbleChart'
export const Header: React.FC = () => {
    return (
        <div>
            <Container maxWidth="lg">
                <nav className={styles.nav}>
                    <ul className={styles.list}>
                        <li className={`${styles.item} ${styles.item}`}>
                            <HomeIcon />
                            Home
                        </li>
                        <li className={styles.item}>
                            <LocalBarIcon />
                            Events
                        </li>
                        <li className={styles.item}>
                            <AttachMoneyIcon />
                            Prices
                        </li>
                        <li className={styles.item}>
                            <BubbleChartIcon />
                            About
                        </li>
                    </ul>
                </nav>
                <h1 className={styles.title}>SNEAKERS</h1>
            </Container>

        </div >
    )
}

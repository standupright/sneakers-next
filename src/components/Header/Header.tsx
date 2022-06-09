
import React, { useState } from 'react'
import styles from './Header.module.scss';
import HomeIcon from '@mui/icons-material/Home';
import { Container } from '@mui/material';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BubbleChartIcon from '@mui/icons-material/BubbleChart'
import Link from 'next/link';

export const Header: React.FC = () => {
    return (
        <div>
            <Container maxWidth="lg">
                <nav className={styles.nav}>
                    <ul className={styles.list}>
                        <li className={`${styles.item} ${styles.item}`}>
                            <Link href="/">
                                <a>
                                    <HomeIcon />
                                    Home
                                </a>
                            </Link>

                        </li>
                        <li className={styles.item}>
                            <Link href="/prices">
                                <a>
                                    <AttachMoneyIcon />
                                    Prices
                                </a>
                            </Link>
                        </li>
                        <li className={styles.item}>
                            <Link href="/events">
                                <a>
                                    <LocalBarIcon />
                                    Events
                                </a>
                            </Link>
                        </li>
                        <li className={styles.item}>
                            <Link href="/about">
                                <a>

                                    <BubbleChartIcon />
                                    About
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <h1 className={styles.title}>SNEAKERS</h1>
            </Container>

        </div >
    )
}

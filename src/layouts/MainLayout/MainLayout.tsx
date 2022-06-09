import React from 'react';
import Head from 'next/head';
import { Header } from '../../components/Header'
import styles from './MainLayout.module.scss'
import { Footer } from '../../components/Footer';

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width,initial-scale=1.0" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css?family=Passion+One|Montserrat:400,700&display=swap" rel="stylesheet" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&display=swap"
                    rel="stylesheet"
                />
                <title>Sneakers</title>
                <meta name="description" content="This is sneakers shop" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.container}>
                <header className={styles.header}>
                    <Header />
                </header>

                <main className={styles.main}>
                    {children}
                </main>

                <footer className={styles.footer}>
                    <Footer />
                </footer>
            </div>
        </>
    )
}

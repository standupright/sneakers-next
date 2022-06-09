import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../src/components/Header'
import { Main } from '../src/components/Main'
import { MainLayout } from '../src/layouts/MainLayout/MainLayout'

const Home: NextPage = () => {
    return (
        <MainLayout>
            <Main />
        </MainLayout>
    )
}

export default Home

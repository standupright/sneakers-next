import { GetServerSideProps, NextPage } from 'next';
import { fetchData } from '../src/api';
import { PricesScreen } from '../src/components/PricesScreen';
import { MainLayout } from '../src/layouts/MainLayout/MainLayout';
import { Price } from '../src/types/prices';

interface PricesProps {
    prices: Price[];
}

const Prices: NextPage<PricesProps> = ({ prices }) => {
    return (
        <MainLayout>
            <PricesScreen prices={prices} />
        </MainLayout>
    )
}

export default Prices;

export async function getStaticProps() {
    const prices = await fetchData();
    return {
        props: {
            prices,
        },
        revalidate: 10, // In seconds
    }
}


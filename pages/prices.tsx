import { GetServerSideProps, NextPage } from 'next';
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
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const prices: Price[] = await res.json()
    return {
        props: {
            prices,
        },
        revalidate: 10, // In seconds
    }
}


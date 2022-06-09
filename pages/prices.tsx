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

export const getServerSideProps: GetServerSideProps = async (context) => {
    // Fetch data from external API
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { prices: data } }
}

export default Prices;

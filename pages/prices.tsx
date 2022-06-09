import { NextPage } from 'next';
import { PricesScreen } from '../src/components/PricesScreen';
import { MainLayout } from '../src/layouts/MainLayout/MainLayout';

const Prices: NextPage = () => {
    return (
        <MainLayout>
            <PricesScreen prices={[]} />
        </MainLayout>
    )
}

export default Prices;

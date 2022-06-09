import { GetServerSideProps, NextPage } from 'next/types';
import { PriceItem } from '../../src/components/PriceItem';
import { MainLayout } from '../../src/layouts/MainLayout/MainLayout';
import { Price } from '../../src/types/prices';
import { Price as PriceType } from '../../src/types/prices';

interface PriceProps {
    price: Price;
}

const Price: NextPage<PriceProps> = ({ price }) => {
    return (
        <MainLayout>
            <div>
                <PriceItem price={price} />
            </div>
        </MainLayout>
    )
};

export default Price;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.id}`)
    const price: PriceType = await res.json()
    return { props: { price } }
}

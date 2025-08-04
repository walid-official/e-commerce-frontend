import { Details } from '@/components/products/details';
import React from 'react';

const ProductDetailsPage = ({ params }: { params: { id: string } }) => {
    return (
        <div>
            <Details productId={params?.id} />
        </div>
    );
};

export default ProductDetailsPage;
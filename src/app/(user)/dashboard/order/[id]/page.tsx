import { OrderDetails } from '@/components/dashboard/details';
import React from 'react';

const DashboardOrderDetailsPage = ({ params }: { params: { id: string } }) => {
    return (
        <div>
            <OrderDetails userId={params?.id} />
        </div>
    );
};

export default DashboardOrderDetailsPage;
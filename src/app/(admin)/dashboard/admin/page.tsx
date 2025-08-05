
import { AdminDashboard } from '@/components/dashboard';
import { withRole } from '@/libs';
import React from 'react';

const AdminDashboardPage = () => {
    return (
        <div className='bg-gray-50 dark:bg-gray-950'>
            <AdminDashboard />
        </div>
    );
};

export default AdminDashboardPage;
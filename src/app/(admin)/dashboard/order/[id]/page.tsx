// import { OrderDetails } from '@/components/dashboard/details';
// import React from 'react';

// const DashboardOrderDetailsPage = ({ params }: { params: { id: string } }) => {
//   return (
//     <div>
//       <OrderDetails userId={params.id} />
//     </div>
//   );
// };

// export default DashboardOrderDetailsPage;


// app/(admin)/dashboard/order/[id]/page.ts
import { OrderDetails } from '@/components/dashboard/details';
import { notFound } from 'next/navigation';

// Define the props interface
interface PageProps {
  params: { id: string };
}

// Page component
export default function OrderPage({ params }: PageProps) {
  const { id } = params;

  if (!id) {
    notFound();
  }

  return (
    <div>
      <h1>Order Details for ID: {id}</h1>
      {/* Your component logic */}
      <OrderDetails userId={params.id} />
    </div>
  );
}

// Optional: Metadata function
export async function generateMetadata({ params }: PageProps) {
  const { id } = params;
  return {
    title: `Order ${id} | Admin Dashboard`,
  };
}
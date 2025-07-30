'use client';

import React, { JSX } from 'react';
import {
  usePathname,
  useRouter,
  useSearchParams,
  notFound,
} from 'next/navigation';
import { useGetUserQuery } from '@/apis/auth';

export function withRole<P extends JSX.IntrinsicAttributes>(
  Component: React.ComponentType<P>,
  requiredRoles: string[]
) {
  return function WithRoleComponent(props: P) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const { isPending, error, data } = useGetUserQuery();

    console.log(data?.user?.role)

    if (isPending) {
      return <div className="text-center py-10">Loading...</div>;
    }

    if (error || !data?.user?.role) {
      const currentPath =
        pathname + (searchParams.toString() ? '?' + searchParams.toString() : '');
      const redirectPath = `signin?redirect=${encodeURIComponent(currentPath)}`;
      router.push(redirectPath);
      return null;
    }

    // ✅ Corrected role check
    const hasRequiredRole = requiredRoles.includes(data?.user?.role);

    console.log(hasRequiredRole)

    if (!hasRequiredRole) {
      return notFound();
    }

    return <Component {...props} />;
  };
}

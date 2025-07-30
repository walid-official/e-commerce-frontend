import { Navbar } from '@/components/home/homeLayout/navbar';
import { UserLayout } from './UserLayout';
import { Footer } from '@/components/home/homeLayout/footer';
export default function UserDashboardRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <UserLayout>
    <Navbar />
    {children}
    <Footer />
    </UserLayout>;
}

import { Navbar } from "@/components/home/homeLayout/navbar";
import { AdminLayout } from "./AdminLayout";
import { Footer } from "@/components/home/homeLayout/footer";

export default function UserDashboardRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminLayout>
    <Navbar />
      <div className='min-h-[90vh]'>
        {children}
      </div>
      <Footer />
    </AdminLayout>;
}

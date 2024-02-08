import Footer from "../com/ui/footer/Footer";
import DashboardNavbar from "../com/ui/dashboard/DashboardNavbar";
import Navbar from "../com/ui/navbar/Navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <section>
      <Navbar />
      <DashboardNavbar />
      <main className='flex-grow my-20'>{children}</main>
    </section>
  )
}
export default DashboardLayout;

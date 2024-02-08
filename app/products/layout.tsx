import Footer from "../com/ui/footer/Footer";
import Navbar from "../com/ui/navbar/Navbar";

export default function ProductsLayout({ children }: { children: React.ReactNode }) {

  return (
          <section className='flex flex-col min-h-screen'>
            <Navbar/>
            <main className='flex-grow'>{children}</main>
            <Footer/>
          </section>
  )
}

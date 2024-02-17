import Image from "next/image";
import Container from "./com/shared/Container";
import Footer from "./com/ui/footer/Footer";
import NavbarHome from "./com/ui/home/navbar/NavbarHome";
import TitleHome from "./com/ui/home/header/TitleHome";
import ContentsHome from "./com/ui/home/content/ContentsHome";

export default function Home() {
  return (
    <>
      <div>
        <Image src={'/image-home.jpg'} width={2000} height={2000} alt="" className="object-cover hover:blur-sm" />
      </div>
      <NavbarHome />
      <TitleHome />
      <Container>
        <ContentsHome />
      </Container>
      <Footer />
    </>
  )
}
